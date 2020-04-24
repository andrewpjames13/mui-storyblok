module.exports = {
  name: 'MuiIconButtonHref',
  display_name: null,
  updated_at: '2020-04-01T16:44:19.941Z',
  schema: {
    rootClass: {
      type: 'options',
    },
    iconButton: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiIconButton',
      ],
      maximum: '1',
    },
    href: {
      type: 'text',
      required: true,
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiIconButtonHref',
  component_group_uuid: null,
};
