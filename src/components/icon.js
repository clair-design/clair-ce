import { html } from 'hybrids'
import feather from 'feather-icons'

export default {
  type: '',
  name: '',
  color: '',
  size: '1em',
  valign: 'baseline',
  ligature: false,
  iconType(host) {
    return host.type || 'feather'
  },
  isSvg(host) {
    return host.iconType === 'feather'
  },
  classNames(host) {
    const prefix = host.iconType !== '' ? `${host.iconType}-` : ''
    return ['c-icon', host.iconType, prefix + host.name]
  },
  svgName(host) {
    return host.isSvg ? `feather-${host.name}` : ''
  },
  iconColor(host) {
    if (!host.color) {
      return host.isSvg ? 'currentColor' : 'inherit'
    }
    return host.color
  },
  render(host) {
    const {
      ligature,
      isSvg,
      svgName,
      name,
      iconType,
      classNames,
      iconColor,
      size,
      valign
    } = host
    const style = { color: iconColor, fontSize: size, verticalAlign: valign }

    if (ligature) {
      return html`
        <i class="${iconType}" style="${style}"> ${name} </i>
      `
    }

    if (isSvg) {
      const icon = feather.icons[name]
      const origAttrs = icon.attrs
      icon.attrs = {
        ...icon.attrs,
        width: size,
        height: size,
        stroke: iconColor,
        style: `vertical-align: ${valign}`
      }
      const svg = icon.toSvg()
      icon.attrs = origAttrs
      return html`
        <span class="c-icon" innerHTML="${svg}"> </span>
      `
    }

    return html`
      <link
        href="https://lib.baomitu.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <i class="${classNames}" style="${style}"></i>
    `
  }
}
