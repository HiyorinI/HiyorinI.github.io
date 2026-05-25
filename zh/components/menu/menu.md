---
title: 菜单
date: 2024-01-01 00:00:00
permalink: /zh/components/menu/menu/
---

# 菜单

## 顶部菜单栏(Menu)

<div align="center">
  <img src="/img/menu.png"  style="border-radius:12px;">
</div>

```xml
<DockPanel>
    <Menu DockPanel.Dock="Top">
        <MenuItem Header="文件(_F)">
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="新建解决方案"
            HotKey="Ctrl+Alt+Shift+C"
            InputGesture="Ctrl+Alt+Shift+C"/>
        <MenuItem Header="打开">
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="打开.."
            HotKey="Ctrl+Shift+O"
            InputGesture="Ctrl+Shift+O">
            <MenuItem.Icon>
                <PathIcon Data="M16.297 8l-1.055 0.734-1.047 0.641-1.133 0.453-1.281 0.172h-9.781v15l0.234 1.156 0.648 0.961 0.961 0.648 1.156 0.234h22l1.156-0.234 0.961-0.648 0.648-0.961 0.234-1.156v-14l-0.234-1.156-0.648-0.961-0.961-0.648-1.156-0.234h-10.703zM5 4l-1.156 0.234-0.961 0.648-0.648 0.961-0.234 1.156v1h9.781l0.781-0.109 0.703-0.289 0.656-0.398 0.641-0.453-0.703-0.977-0.75-0.883-0.914-0.641-1.195-0.25h-6zM4.891 2h6.109l1.002 0.084 0.85 0.252 1.398 0.898 1.156 1.281 1.094 1.484h10.609l0.961 0.1 0.914 0.299 0.834 0.465 0.721 0.598 0.598 0.721 0.465 0.834 0.299 0.914 0.1 0.961v14.219l-0.1 0.961-0.299 0.914-0.465 0.834-0.598 0.721-0.721 0.598-0.834 0.465-0.914 0.299-0.961 0.1h-22.219l-0.961-0.1-0.914-0.299-0.834-0.465-0.721-0.598-0.598-0.721-0.465-0.834-0.299-0.914-0.1-0.961v-18.219l0.1-0.961 0.299-0.914 0.465-0.834 0.598-0.721 0.721-0.598 0.834-0.465 0.914-0.299 0.961-0.1z"/>
            </MenuItem.Icon>
            </MenuItem>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="从版本控制中获取..."/>
        </MenuItem>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="关闭解决方案"
            HotKey="Ctrl+Alt+Shift+Q"
            InputGesture="Ctrl+Alt+Shift+Q"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="远程开发"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="全部保存"
            HotKey="Ctrl+S"
            InputGesture="Ctrl+S"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="从磁盘全部重新加载
            HotKey="Ctrl+Alt+Y"
            InputGesture="Ctrl+Alt+Y"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="导出"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="打印"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="文件编码"/>
        <MenuItem Header="行分隔符">
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="CRLF - Windows(\r\n)"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="LF - Unix 和 macOS(\n)"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="CR - Classic Mac OS(\r)"/>
        </MenuItem>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="将文件设置为只读"/>
        <Separator/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="设置"
            HotKey="Ctrl+Alt+S"
            InputGesture="Ctrl+Alt+S">
            <MenuItem.Icon>
            <PathIcon Data="M16 12l-0.408 0.020-0.395 0.059-0.382 0.098-0.37 0.137-0.352 0.171-0.33 0.2-0.307 0.229-0.285 0.259-0.259 0.285-0.229 0.307-0.2 0.33-0.171 0.352-0.137 0.37-0.098 0.382-0.059 0.395-0.020 0.408 0.020 0.408 0.059 0.395 0.098 0.382 0.137 0.37 0.171 0.352 0.2 0.33 0.229 0.307 0.259 0.285 0.285 0.259 0.307 0.23 0.33 0.2 0.352 0.171 0.37 0.137 0.382 0.098 0.395 0.059 0.408 0.020 0.408-0.020 0.395-0.059 0.382-0.098 0.37-0.137 0.352-0.171 0.33-0.2 0.307-0.23 0.285-0.259 0.259-0.285 0.23-0.307 0.2-0.33 0.171-0.352 0.137-0.37 0.098-0.382 0.059-0.395 0.020-0.408-0.020-0.408-0.059-0.395-0.098-0.382-0.137-0.37-0.171-0.352-0.2-0.33-0.23-0.307-0.259-0.285-0.285-0.259-0.307-0.229-0.33-0.2-0.352-0.171-0.37-0.137-0.382-0.098-0.395-0.059-0.408-0.020zM16 10l0.615 0.029 0.596 0.088 0.576 0.146 0.557 0.205 0.529 0.256 0.494 0.299 0.459 0.342 0.424 0.385 0.385 0.424 0.342 0.459 0.299 0.494 0.256 0.529 0.205 0.557 0.146 0.576 0.088 0.596 0.029 0.615-0.029 0.615-0.088 0.596-0.146 0.576-0.205 0.557-0.256 0.529-0.299 0.494-0.342 0.459-0.385 0.424-0.424 0.385-0.459 0.342-0.494 0.299-0.529 0.256-0.557 0.205-0.576 0.146-0.596 0.088-0.615 0.029-0.615-0.029-0.596-0.088-0.576-0.146-0.557-0.205-0.529-0.256-0.494-0.299-0.459-0.342-0.424-0.385-0.385-0.424-0.342-0.459-0.299-0.494-0.256-0.529-0.205-0.557-0.146-0.576-0.088-0.596-0.029-0.615 0.029-0.615 0.088-0.596 0.146-0.576 0.205-0.557 0.256-0.529 0.299-0.494 0.342-0.459 0.385-0.424 0.424-0.385 0.459-0.342 0.494-0.299 0.529-0.256 0.557-0.205 0.576-0.146 0.596-0.088 0.615-0.029zM16 2l-1.125 0.039-1.109 0.117-0.266 1.547-0.297 1.531-0.083 0.337-0.108 0.325-0.134 0.312-0.159 0.299-0.383 0.545-0.461 0.463-0.531 0.377-0.594 0.287-0.318 0.106-0.33 0.076-0.342 0.045-0.354 0.015-0.347-0.015-0.337-0.044-0.327-0.073-0.317-0.103h-0.016l-2.875-1.063h-0.016l-0.684 0.908-0.613 0.943-0.535 0.986-0.449 1.037v0.016l2.391 2.031 0.31 0.288 0.272 0.316 0.235 0.344 0.198 0.373 0.157 0.392 0.112 0.403 0.067 0.414 0.022 0.424-0.023 0.425-0.069 0.415-0.115 0.405-0.161 0.395-0.202 0.376-0.238 0.347-0.274 0.317-0.31 0.288-2.359 1.969v0.016l0.016 0.053 0.047 0.127 0.051 0.127 0.027 0.053 0.412 0.947 0.486 0.904 0.557 0.865 0.623 0.83h0.016l2.938-1.063 0.314-0.096 0.318-0.068 0.322-0.041 0.326-0.014 0.521 0.032 0.499 0.097 0.478 0.161 0.456 0.226 0.359 0.229 0.327 0.264 0.294 0.299 0.262 0.334 0.225 0.36 0.183 0.378 0.141 0.395 0.099 0.413 0.531 3.047 1.129 0.141 1.137 0.047 1.125-0.039 1.109-0.117 0.066-0.385 0.074-0.467 0.172-1.039 0.203-1.016 0.109-0.438 0.109-0.344 0.252-0.557 0.318-0.498 0.385-0.439 0.451-0.381 0.503-0.308 0.54-0.22 0.577-0.132 0.614-0.044 0.455 0.037 0.521 0.111 0.563 0.162 0.578 0.189 1.133 0.422 0.516 0.203 0.453 0.172 0.691-0.9 0.605-0.951 0.527-0.994 0.457-1.029v-0.016l-2.391-2.031-0.31-0.288-0.272-0.316-0.235-0.344-0.198-0.373-0.157-0.392-0.112-0.403-0.067-0.414-0.022-0.424 0.023-0.425 0.069-0.415 0.115-0.405 0.161-0.396 0.202-0.376 0.238-0.347 0.274-0.317 0.31-0.288 2.359-1.969v-0.016l-0.016-0.053-0.047-0.127-0.051-0.127-0.027-0.053-0.412-0.947-0.486-0.904-0.557-0.865-0.623-0.83h-0.016l-2.938 1.063-0.314 0.096-0.318 0.068-0.322 0.041-0.326 0.014-0.52-0.032-0.499-0.097-0.478-0.161-0.456-0.226-0.359-0.229-0.327-0.264-0.294-0.299-0.262-0.334-0.225-0.36-0.183-0.378-0.141-0.396-0.099-0.413-0.531-3.047-1.129-0.141-1.137-0.047zM16 0l1.313 0.047 0.652 0.066 0.645 0.105 0.313 0.081 0.284 0.118 0.255 0.155 0.226 0.192 0.192 0.226 0.155 0.255 0.118 0.284 0.081 0.313 0.531 3.031 0.087 0.321 0.136 0.292 0.185 0.263 0.233 0.233 0.269 0.191 0.29 0.137 0.312 0.082 0.333 0.027 0.272-0.013 0.27-0.038 0.269-0.063 0.267-0.089 2.109-0.875 0.267-0.089 0.269-0.063 0.27-0.038 0.272-0.013 0.236 0.012 0.223 0.037 0.21 0.061 0.198 0.085 0.365 0.236 0.33 0.318 0.221 0.273 0.256 0.352 0.279 0.41 0.291 0.449 0.297 0.482 0.297 0.51 0.279 0.516 0.244 0.5 0.205 0.479 0.162 0.451 0.105 0.402 0.035 0.332-0.018 0.28-0.053 0.263-0.088 0.245-0.123 0.228-0.314 0.42-0.381 0.385-0.434 0.357-0.945 0.676-0.434 0.357-0.381 0.379-0.314 0.402-0.123 0.215-0.088 0.232-0.053 0.249-0.018 0.265 0.018 0.259 0.053 0.245 0.088 0.231 0.123 0.218 0.316 0.408 0.387 0.381 0.438 0.361 0.469 0.35 0.469 0.354 0.438 0.373 0.387 0.396 0.316 0.424 0.123 0.227 0.088 0.242 0.053 0.258 0.018 0.273-0.037 0.342-0.111 0.4-0.17 0.447-0.213 0.482-0.252 0.504-0.287 0.512-0.609 0.984-0.301 0.449-0.293 0.41-0.268 0.352-0.225 0.273-0.33 0.305-0.365 0.227-0.4 0.141-0.436 0.047-0.259-0.013-0.262-0.038-0.265-0.063-0.268-0.089-1.070-0.445-1.063-0.445-0.264-0.089-0.26-0.063-0.256-0.038-0.252-0.013-0.324 0.018-0.285 0.053-0.246 0.088-0.207 0.123-0.332 0.322-0.246 0.404-0.174 0.469-0.115 0.516-0.18 1.039-0.297 1.578-0.082 0.32-0.121 0.288-0.16 0.255-0.199 0.223-0.233 0.189-0.263 0.153-0.292 0.117-0.321 0.081-0.627 0.092-0.631 0.057-1.273 0.039-1.313-0.047-0.652-0.066-0.645-0.105-0.313-0.082-0.284-0.12-0.255-0.158-0.226-0.196-0.192-0.229-0.155-0.257-0.118-0.286-0.081-0.314-0.531-3.016-0.087-0.321-0.136-0.292-0.185-0.263-0.233-0.233-0.269-0.191-0.29-0.137-0.312-0.082-0.333-0.027-0.272 0.013-0.271 0.038-0.269 0.063-0.267 0.089-2.109 0.875-0.267 0.089-0.269 0.063-0.271 0.038-0.272 0.013-0.229-0.012-0.22-0.037-0.21-0.061-0.2-0.085-0.371-0.236-0.332-0.318-0.221-0.273-0.256-0.352-0.279-0.41-0.291-0.449-0.297-0.482-0.297-0.51-0.279-0.516-0.244-0.5-0.205-0.479-0.162-0.451-0.105-0.402-0.035-0.332 0.018-0.274 0.053-0.259 0.088-0.245 0.123-0.23 0.314-0.426 0.381-0.387 0.434-0.357 0.945-0.676 0.434-0.357 0.381-0.379 0.314-0.402 0.123-0.215 0.088-0.232 0.053-0.249 0.018-0.265-0.018-0.259-0.053-0.245-0.088-0.231-0.123-0.218-0.316-0.408-0.387-0.381-0.438-0.361-0.469-0.35-0.469-0.354-0.438-0.373-0.387-0.396-0.316-0.424-0.123-0.227-0.088-0.242-0.053-0.258-0.018-0.273 0.037-0.32 0.111-0.398 0.17-0.453 0.213-0.484 0.252-0.506 0.287-0.518 0.609-1 0.299-0.455 0.287-0.412 0.262-0.348 0.223-0.262 0.334-0.305 0.377-0.227 0.412-0.141 0.439-0.047 0.271 0.013 0.268 0.038 0.264 0.063 0.26 0.089 1.031 0.445 1.039 0.445 0.263 0.089 0.266 0.063 0.269 0.038 0.272 0.013 0.339-0.027 0.315-0.081 0.291-0.134 0.266-0.188 0.23-0.231 0.182-0.263 0.134-0.295 0.086-0.328 0.563-3.063 0.083-0.313 0.123-0.284 0.163-0.255 0.203-0.226 0.236-0.192 0.262-0.155 0.289-0.118 0.315-0.081 0.629-0.092 0.637-0.057 1.266-0.039z"/>
            </MenuItem.Icon>
        </MenuItem>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="新建项目设置"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="管理IDE设置"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="省电模式"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="使缓存失效/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="退出/>
        </MenuItem>

        <!--  Edit  -->
        <MenuItem Header="编辑(_E)">
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="撤销"
            HotKey="Ctrl+Z"
            InputGesture="Ctrl+Z"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="重做"
            HotKey="Ctrl+Shift+Z"
            InputGesture="Ctrl+Shift+Z"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="剪切"
            HotKey="Ctrl+X"
            InputGesture="Ctrl+X"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="复制"
            HotKey="Ctrl+C"
            InputGesture="Ctrl+C"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="复制为纯文本"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="粘贴"
            HotKey="Ctrl+V"
            InputGesture="Ctrl+V"/>
        <Separator/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="删除"
            HotKey="Delete"
            InputGesture="Delete"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="在所选内容中搜索"
            HotKey="Ctrl+Alt+E"
            InputGesture="Ctrl+Alt+E"/>
        <MenuItem Header="查找">
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="查找"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="替换"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="查找下一个匹配项"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="查找上一个匹配项"/>
            <Separator/>

            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="选择所有匹配项"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="将下一个匹配项添加到选择"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="取消选择的匹配项"/>
        </MenuItem>
        <MenuItem Header="查找用法">
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="下一个高亮显示用法"
            IsEnabled="False"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="转到上一个高亮的元素用法"
            IsEnabled="False"/>
            <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="最近的查找用法"/>
        </MenuItem>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="全选"
            HotKey="Ctrl+A"
            InputGesture="Ctrl+A"/>
        </MenuItem>

        <!--  View  -->
        <MenuItem Header="视图(_V)">
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="工具窗口"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="外观"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="快速定义"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="快速定义类型"/>
        <Separator/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="最近的位置"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="最近的文件"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="最近更改的文件"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="最近的更改"/>
        </MenuItem>

        <!--  Navigation  -->
        <MenuItem Header="导航(_N)">
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="后退"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="前进"
            IsEnabled="False"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="随处搜索"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="类"
            HotKey="Ctrl+N"
            InputGesture="Ctrl+N"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="文件"
            HotKey="Ctrl+Shift+N"
            InputGesture="Ctrl+Shift+N"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="符号"
            HotKey="Ctrl+Alt+Shift+N"
            InputGesture="Ctrl+Alt+Shift+N"/>
        </MenuItem>

        <!--  Code  -->
        <MenuItem Header="代码(_C)">
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="代码补全"
            IsEnabled="False"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="检查代码"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="分析代码"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="插入实时模板"
            HotKey="Ctrl+J"
            InputGesture="Ctrl+J"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="保存为实时模版"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="使用模板包围"
            HotKey="Ctrl+Alt+T"
            InputGesture="Ctrl+Alt+T"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="解包/移除"
            HotKey="Ctrl+Shift+Delete"
            InputGesture="Ctrl+Shift+Delete"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="折叠"/>
        </MenuItem>

        <!--  Refactoring  -->
        <MenuItem Header="重构(_R)">
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="重命名"
            HotKey="Shift+F6"
            InputGesture="Shift+F6"/>
        </MenuItem>

        <!--  Build  -->
        <MenuItem Header="构建(_B)">
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="构建解决方案"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="重新构建解决方案"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="清理解决方案"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="构建当前项目"
            IsEnabled="False"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="构建启动项目: Gallery"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="高级构建操作"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="更改解决方案配置"/>
        </MenuItem>

        <!--  Run  -->
        <MenuItem Header="运行(_U)">
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="重新运行.'NET项目: Gallery'"
            HotKey="Shift+F10"
            InputGesture="Shift+F10"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="调试'Gallery'"
            HotKey="Shift+F9"
            InputGesture="Shift+F9"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="使用分析器运行"
            IsEnabled="False"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="分析'Gallery'(使用 时间线)"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="运行"
            HotKey="Alt+Shift+F10"
            InputGesture="Alt+Shift+F10"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="调试"
            HotKey="Alt+Shift+F9"
            InputGesture="Alt+Shift+F9"/>
        <MenuItem
            Command="{Binding ClickedMenuItemCommand}"
            CommandParameter="{Binding $self.Header}"
            Header="附加到进程"
            HotKey="Ctrl+Alt+F5"
            InputGesture="Ctrl+Alt+F5"/>
        </MenuItem>
    </Menu>
    </DockPanel>
```

## 上下文菜�?(ContextMemnu)

<div align="center">
  <img src="/img/context_menu.png"  style="border-radius:12px;">
</div>


```xml
<Border
    Width="500"
    Height="500"
    Background="#FFFFFF">
    <Border.ContextMenu>
    <ui:FluentContextMenu Name="ContextMenu">
        <MenuItem Header="Copy" InputGesture="Ctrl+C">
        <MenuItem.Icon>
            <PathIcon Data="{StaticResource Copy}"/>
        </MenuItem.Icon>
        </MenuItem>
        <MenuItem Header="Cut" InputGesture="Ctrl+X">
        <MenuItem.Icon>
            <PathIcon Data="{StaticResource Cut}"/>
        </MenuItem.Icon>
        </MenuItem>
        <MenuItem Header="Paste" InputGesture="Ctrl+V">
        <MenuItem.Icon>
            <PathIcon Data="{StaticResource Paste}"/>
        </MenuItem.Icon>
        </MenuItem>
        <MenuItem Header="添加">
        <MenuItem Header="视频"/>
        <MenuItem Header="音频"/>
        </MenuItem>
        <MenuItem Header="Selected All" InputGesture="Ctrl+A"/>
    </ui:FluentContextMenu>
    </Border.ContextMenu>
</Border>
```


## 自定义内容的上下文菜�?

<div align="center">
  <img src="/img/custom_content_context_menu.png"  style="border-radius:12px;">
</div>



```xml
<Border
    Width="500"
    Height="500"
    Background="#FFFFFF">
    <Border.ContextMenu>
    <ui:FluentContextMenu Width="300">
        <Grid ColumnDefinitions="Auto, *" RowDefinitions="Auto, Auto, Auto">
        <Image
            Grid.RowSpan="3"
            Grid.Column="0"
            Width="64"
            Height="64"
            Margin="-18,0,10,0"
            HorizontalAlignment="Left"
            VerticalAlignment="Center"
            RenderOptions.BitmapInterpolationMode="HighQuality"
            Source="avares://Test/Assets/avater.png"
            Stretch="Uniform"/>
        <TextBlock
            Grid.Row="0"
            Grid.Column="1"
            Margin="11,0,0,0"
            VerticalAlignment="Center"
            FontSize="18"
            Text="妃爱亲"/>
        <TextBlock
            Grid.Row="1"
            Grid.Column="1"
            Margin="11,0,0,0"
            VerticalAlignment="Center"
            FontSize="12"
            Text="hanserinterval@hotmail.com"/>
        <Button
            Grid.Row="2"
            Grid.Column="1"
            HorizontalAlignment="Left"
            Content="注销"
            Foreground="{DynamicResource SystemAccentColor}"
            Theme="{StaticResource TransparentButton}"/>
        </Grid>
        <Separator HorizontalAlignment="Stretch"/>
        <MenuItem Header="管理账户和设置">
        <MenuItem.Icon>
            <PathIcon Data="{StaticResource People}"/>
        </MenuItem.Icon>
        </MenuItem>
        <MenuItem Header="支付方式">
        <MenuItem.Icon>
            <PathIcon Data="{StaticResource ShoppingCart}"/>
        </MenuItem.Icon>
        </MenuItem>
        <MenuItem Header="兑换代码和礼品卡">
        <MenuItem.Icon>
            <PathIcon Data="{StaticResource Code}"/>
        </MenuItem.Icon>
        </MenuItem>
        <Separator HorizontalAlignment="Stretch"/>
        <MenuItem Header="设置">
        <MenuItem.Icon>
            <PathIcon Data="{StaticResource Setting}"/>
        </MenuItem.Icon>
        </MenuItem>
    </ui:FluentContextMenu>
    </Border.ContextMenu>
</Border>
```

## 可选中的上下文菜单

<div align="center">
  <img src="/img/checked_context_menu.png"  style="border-radius:12px;">
</div>


```xml
<Border
    Width="500"
    Height="500"
    Background="#FFFFFF">
    <Border.ContextMenu>
    <ui:FluentContextMenu>
        <MenuItem
        GroupName="Top"
        Header="创建日期"
        IsChecked="True"
        ToggleType="CheckBox"/>
        <MenuItem
        GroupName="Top"
        Header="拍摄日期"
        ToggleType="CheckBox"/>
        <MenuItem
        GroupName="Top"
        Header="修改日期"
        ToggleType="CheckBox"/>
        <MenuItem
        GroupName="Top"
        Header="名称"
        ToggleType="CheckBox"/>

        <Separator HorizontalAlignment="Stretch"/>

        <MenuItem
        GroupName="Bottom"
        Header="升序"
        ToggleType="Radio"/>
        <MenuItem
        GroupName="Bottom"
        Header="降序"
        IsChecked="True"
        ToggleType="Radio"/>
    </ui:FluentContextMenu>
    </Border.ContextMenu>
</Border>
```


## 系统托盘菜单

```xml
# 写再App.xaml
<TrayIcon.Icons>
    <TrayIcons>
      <TrayIcon Icon="/Assets/app.ico" ToolTipText="Avalonia Tray Icon ToolTip">
        <TrayIcon.Menu>
          <NativeMenu>
            <NativeMenuItem Header="Settings">
              <NativeMenu>
                <NativeMenuItem Header="Option 1"/>
                <NativeMenuItem Header="Option 2"/>
                <NativeMenuItemSeparator/>
                <NativeMenuItem Header="Option 3"/>
                <NativeMenuItem Click="OnClicked" Header="退出"/>
              </NativeMenu>
            </NativeMenuItem>
          </NativeMenu>
        </TrayIcon.Menu>
      </TrayIcon>
    </TrayIcons>
  </TrayIcon.Icons>
```