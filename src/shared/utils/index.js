import * as NumbersUtil from './Number';
import * as SortingUtil from './Sorting';
import * as VariablesUtil from './Variables';
import * as ObjectUtilHelper from './Object';
import coloredConsole from './Console';
import * as ViewportHelper from './Viewport';
import { debounce as DebounceHelper } from './Debounce';
import { throttle as ThrottleHelper } from './Throttle';

export const Numbers = NumbersUtil;
export const Sorting = SortingUtil;
export const Variables = VariablesUtil;
export const ObjectUtil = ObjectUtilHelper;
export const Console = coloredConsole;
export const Viewport = ViewportHelper;
export const debounce = DebounceHelper;
export const throttle = ThrottleHelper;
