import { html, dispatch } from 'hybrids/esm'

const colorPresets = [
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'pink',
  'dark',
  'black'
]

function handleClick(host) {
  dispatch(host, 'close')
}

// capture mode
// handleClick.options = true;

export default {
  size: 'md',
  label: '',
  color: '',
  closable: false,
  classNames(host) {
    const { color, size, closable } = host
    const isPresetColor = color && colorPresets.indexOf(color) > -1
    return [
      'c-chip__wrapper',
      size ? `is-${size}` : '_',
      closable ? 'c-chip--closable' : '_',
      isPresetColor ? `c-chip--${color}` : '_'
    ]
  },
  styleObj({ color }) {
    if (color && colorPresets.indexOf(color) === -1) {
      return {
        backgroundColor: color
      }
    }
    return {}
  },
  render: host => {
    const { classNames, styleObj, label, closable } = host
    return html`
      <link rel="stylesheet" href="https://unpkg.com/clair/dist/clair.css" />
      <div class="${classNames}" style="${styleObj}">
        <slot name="content">
          <span class="c-chip__label">${label}</span>
        </slot>
        ${
          closable
            ? html`
                <span onclick="${handleClick}"> <i>x</i> </span>
              `
            : ''
        }
      </div>
    `
  }
}
