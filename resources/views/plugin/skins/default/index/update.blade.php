<form action="{{ route('settings.plugins.manage.update') }}" method="post">
    {{ csrf_field() }}
    {{ method_field('put') }}

    <div class="xe-modal-header">
        <button type="button" class="btn-close" data-dismiss="xe-modal" aria-label="Close"><i class="xi-close"></i></button>
        <strong class="xe-modal-title">{{ xe_trans('xe::plugin') }} {{ xe_trans('xe::update_plugin') }}</strong>
    </div>
    <div class="xe-modal-body">

        @if(count($plugins))
        <p>
            아래 플러그인을 업데이트합니다. 업데이트하는 플러그인에서 의존하는 다른 플러그인이 같이 설치될 수 있습니다.<br>
            업데이트 과정은 수분이상 소요될 수 있습니다. 업데이트하시겠습니까?
        </p>

        <hr>

        <ul class="list-unstyled">
            @foreach($plugins as $plugin)
                <li>
                    <label>
                        <input type="checkbox" name="pluginId[]" value="{{ $plugin->getId() }}" checked>
                        {{ $plugin->getTitle() }}({{ $plugin->getId() }}) ver.{{ $plugin->getVersion() }} => ver.{{ $plugin->getLatestVersion() }}
                    </label>
                </li>
            @endforeach
        </ul>
        @else
        <p>
            업데이트할 플러그인이 없습니다 모든 플러그인이 최신 버전입니다.
        </p>
        @endif

    </div>
    <div class="xe-modal-footer">
        <button type="button" class="xe-btn xe-btn-secondary" data-dismiss="xe-modal">{{ xe_trans('xe::cancel') }}</button>

        @if(count($plugins))
        <button type="submit" class="xe-btn xe-btn-primary" >{{ xe_trans('xe::update_plugin') }}</button>
        @endif
    </div>
</form>








