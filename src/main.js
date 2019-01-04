// Add shims and polyfills
import 'hybrids/shim'

import { define } from 'hybrids'

import ChipElement from './components/chip'
import IconElement from './components/icon'
import BreadcrumbElement from './components/breadcrumb'

define('c-chip', ChipElement)
define('c-icon', IconElement)
define('c-breadcrumb', BreadcrumbElement)
