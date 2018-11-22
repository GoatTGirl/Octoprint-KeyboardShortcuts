from __future__ import absolute_import

import octoprint.plugin

class TabShortcutsPlugin(octoprint.plugin.AssetPlugin):

    def get_assets(self):
        return dict(
            js=["js/tabshortcuts.js"],
        )

__plugin_name__ = "TabShortcuts Plugin"
__plugin_implementation__ = TabShortcutsPlugin()
