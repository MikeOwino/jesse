from typing import Union

import numpy as np
try:
    from numba import njit
except ImportError:
    njit = lambda a : a

from jesse.helpers import get_candle_source, slice_candles


def high_pass(candles: np.ndarray, period: int = 48, source_type: str = "close", sequential: bool = False) -> Union[
    float, np.ndarray]:
    """
    (1 pole) high-pass filter indicator by John F. Ehlers

    :param candles: np.ndarray
    :param period: int - default: 48
    :param source_type: str - default: "close"
    :param sequential: bool - default: False

    :return: float | np.ndarray
    """

    if len(candles.shape) == 1:
      source = candles
    else:
      candles = slice_candles(candles, sequential)
      source = get_candle_source(candles, source_type=source_type)

    hpf = high_pass_fast(source, period)

    if sequential:
        return hpf
    else:
        return None if np.isnan(hpf[-1]) else hpf[-1]


@njit(cache=True)
def high_pass_fast(source, period):  # Function is compiled to machine code when called the first time
    k = 1
    alpha = 1 + (np.sin(2 * np.pi * k / period) - 1) / np.cos(2 * np.pi * k / period)
    newseries = np.copy(source)
    for i in range(1, source.shape[0]):
        newseries[i] = (1 - alpha / 2) * source[i] - (1 - alpha / 2) * source[i - 1] \
                       + (1 - alpha) * newseries[i - 1]
    return newseries
