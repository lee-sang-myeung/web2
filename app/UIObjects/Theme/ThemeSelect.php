<?php
/**
 * ThemeSelect.php
 *
 * PHP version 7
 *
 * @category    UIObjects
 * @package     App\UIObjects\Theme
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER Corp. <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html LGPL-2.1
 * @link        https://xpressengine.io
 */

namespace App\UIObjects\Theme;

use Xpressengine\Theme\ThemeHandler;
use Xpressengine\UIObject\AbstractUIObject;

/**
 * Class ThemeSelect
 *
 * @category    UIObjects
 * @package     App\UIObjects\Theme
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER Corp. <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html LGPL-2.1
 * @link        https://xpressengine.io
 */
class ThemeSelect extends AbstractUIObject
{
    /**
     * The component id
     *
     * @var string
     */
    protected static $id = 'uiobject/xpressengine@themeSelect';

    /**
     * The name of view
     *
     * @var string
     */
    protected $view = 'uiobjects.theme.themeSelect';

    /**
     * Get the evaluated contents of the object.
     *
     * @return string
     */
    public function render()
    {
        $themes = [];
        $args = $this->arguments;
        $prefix = array_get($args, 'prefixName', 'theme_');
        /** @var ThemeHandler $themeHandler */
        $themeHandler = app('xe.theme');

        if (!isset($args['themes'])) {
            $themes = $themeHandler->getAllTheme();
        }

        if (!isset($args['selectedTheme'])) {
            $selectedThemeId = $themeHandler->getSiteThemeId();
        } else {
            $selectedThemeId = array_get($args, 'selectedTheme');
        }

        $previewLink = array_get($args, 'preview', '/');

        if (strpos($previewLink, '?') === false) {
            $previewLink .= '?';
        } else {
            $previewLink .= '&';
        }

        $this->loadFiles();

        $this->template = view($this->view, compact('themes', 'selectedThemeId', 'prefix', 'previewLink'))->render();

        return parent::render();
    }

    /**
     * Load assets.
     *
     * @return void
     */
    protected function loadFiles()
    {
        $frontend = app('xe.frontend');
        $frontend->css('assets/core/theme/theme-select.css')->load();
        $frontend->js('assets/core/common/js/form.js')->load();
    }
}
