module.exports = {
  "name": "MuiActionCard",
  "display_name": null,
  "updated_at": "2020-06-15T20:02:57.186Z",
  "schema": {
    "header": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTypography"
      ],
      "required": true,
      "maximum": "1"
    },
    "icon": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIcon"
      ],
      "required": true,
      "maximum": "1"
    },
    "text": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTypography"
      ],
      "required": true,
      "maximum": "1"
    },
    "redirectRoute": {
      "type": "text",
      "required": true,
      "description": "Redirect Route",
      "default_value": ""
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiActionCard",
  "component_group_uuid": null
}