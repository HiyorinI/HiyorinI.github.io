---
title: 信息徽章
date: 2024-01-01 00:00:00
permalink: /zh/components/status_and_information/info_badge/
---

# 徽章

## 信息徽章 (InfoBadge)

<div align="center">
  <img src="/img/info_badge.png" style="border-radius:12px;">
</div>

```xml
<ui:InfoBadge Classes="Attention" Value="10"/>
<ui:InfoBadge Classes="Informational" Value="50"/>
<ui:InfoBadge Classes="Success" Value="100"/>
<ui:InfoBadge Classes="Caution" Value="500"/>
<ui:InfoBadge Classes="Critical" Value="1000"/>
<Panel>
    <ui:ToolButton IconData="{StaticResource Home}"/>
    <ui:InfoBadge
    Margin="32,0,0,24"
    HorizontalAlignment="Right"
    VerticalAlignment="Top"
    Classes="Critical"
    Value="3"/>
</Panel>
```