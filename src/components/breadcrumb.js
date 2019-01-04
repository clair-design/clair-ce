import { html, dispatch } from 'hybrids/esm'

export default {
  divider: '/',
  render(host) {
    const { children, divider, breadcrumbItems } = host
    console.dir(host)
    return html`
      <nav class="c-breadcrumb">
        <!-- ${
          [...children].reduce((acc, child) => acc.concat(child, divider), [])
        } -->
        <slot></slot>
      </nav>
    `
  }
}
