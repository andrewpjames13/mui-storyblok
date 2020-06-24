module.exports = {
  "name": "MuiCardHeader",
  "display_name": null,
  "updated_at": "2020-06-15T22:31:39.061Z",
  "schema": {
    "title": {
      "type": "text",
      "required": true,
      "description": "The content of the Card Title.",
      "pos": 0
    },
    "subheader": {
      "type": "text",
      "description": "The content of the Card Title.",
      "pos": 1
    },
    "action": {
      "type": "bloks",
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIconButtonRedirect",
        "MuiIconButtonHref",
        "MuiIconButtonDownload",
        "MuiIconButtonDialog",
        "MuiIcon"
      ],
      "pos": 2,
      "description": "The action to display in the card header. MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, MuiTooltip,"
    },
    "avatar": {
      "type": "bloks",
      "description": "The Avatar for the Card Header. MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, MuiTooltip",
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIconButtonRedirect",
        "MuiIconButtonHref",
        "MuiIconButtonDownload",
        "MuiIconButtonDialog",
        "MuiIcon"
      ],
      "pos": 3,
      "display_name": ""
    },
    "rootClass": {
      "type": "options",
      "pos": 4,
      "description": "Mui Override or extend the styles applied to the component. See CSS API below for more details."
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiCardHeader",
  "component_group_uuid": null
}