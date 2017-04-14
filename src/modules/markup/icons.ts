import CLASS_NAMES from '../class-list';

const {
  ICON,
} = CLASS_NAMES;

export const errorIcon = () => {
  const icon = `${ICON}--error`;
  const line = `${icon}__line`;

  const markup = `
    <div class="${icon}__x-mark">
      <span class="${line} ${line}--left"></span>
      <span class="${line} ${line}--right"></span>
    </div>
  `;

  return markup;
}

export const warningIcon = `
  <div class="sa-icon sa-warning">
    <span class="sa-body"></span>
    <span class="sa-dot"></span>
  </div>
`;

export const infoIcon = `
  <div class="sa-icon sa-info"></div>
`;

export const successIcon = `
  <div class="sa-icon sa-success">
    <span class="sa-line sa-tip"></span>
    <span class="sa-line sa-long"></span>

    <div class="sa-placeholder"></div>
    <div class="sa-fix"></div>
  </div>
`;

export const customIcon = `
  <div class="sa-icon sa-custom"></div>
`;
