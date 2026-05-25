---
title: 下拉框
date: 2024-01-01 00:00:00
permalink: /zh/components/basic_input/combobox/
---

# 下拉框


## 下拉框 (FluentComboBox)

<div align="center">
  <img src="/img/fluent_combo_box.png"  style="border-radius:12px;">
</div>

```xml
<ui:FluentComboBox Width="256">
      <ComboBoxItem Content="Item 1"/>
      <ComboBoxItem Content="Item 2"/>
      <ComboBoxItem Content="Item 3"/>
      <ComboBoxItem Content="Item 4"/>
      <ComboBoxItem Content="Item 5"/>
      <ComboBoxItem Content="Item 6"/>
    </ui:FluentComboBox>
```

## 多选下拉框 (MultiSelectionComboBox)

<div align="center">
  <img src="/img/multi_selection_combo_box.png"  style="border-radius:12px;">
</div>

```xml
<ui:MultiSelectionComboBox Width="328" ItemsSource="{Binding Items}"/>
```