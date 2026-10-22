

const ADMIN_PASSWORD = 'Void';

const MENU = [
  { id: 1, name: { zh: '排骨便當', 'zh-CN': '排骨便当', yue: '排骨便當', ja: '豚カルビ弁当', en: 'Pork Rib Bento', ko: '갈비 도시락' }, price: 80, available: true },
  { id: 2, name: { zh: '雞腿便當', 'zh-CN': '鸡腿便当', yue: '雞髀便當', ja: '鶏もも弁当', en: 'Chicken Leg Bento', ko: '닭다리 도시락' }, price: 85, available: true },
  { id: 3, name: { zh: '素食便當', 'zh-CN': '素食便当', yue: '素食便當', ja: 'ベジタリアン弁当', en: 'Vegetarian Bento', ko: '채식 도시락' }, price: 70, available: true },
  { id: 4, name: { zh: '滷肉飯', 'zh-CN': '卤肉饭', yue: '滷肉飯', ja: '豚角煮ご飯', en: 'Braised pork rice', ko: '노육밥' }, price: 55, available: true },
  { id: 5, name: { zh: '貢丸湯', 'zh-CN': '贡丸汤', yue: '貢丸湯', ja: '肉団子スープ', en: 'Gongwan Soup', ko: '공완탕' }, price: 20, available: true }
];

let nextMenuId = 6;

const I18N = {
  zh: {
    update_btn: '更新內容',
    lang_zh: '中文', lang_zhcn: '简体中文', lang_yue: '中文 粵語', lang_ja: '日本語', lang_en: 'English', lang_ko: '한국어',
    nav_menu: '菜單', nav_order: '訂餐', nav_stats: '統計', nav_help: '說明',
    hero_title: '校園午餐<br><span class="accent">訂餐系統</span>',
    hero_subtitle: '班級午餐統一登記平台。輸入座號與餐點，自動計算金額與統計數量，方便向餐廳下單與結帳。',
    meta_orders: '總訂單數', meta_amount: '應繳總額', meta_items: '菜單品項',
    section_order: '訂餐登記', label_seat: '座號 (1 - 50)', placeholder_seat: '輸入座號',
    label_meal: '選擇餐點', placeholder_meal: '-- 請選擇餐點 --',
    btn_add: '➕ 新增訂單', section_stats: '統計報表',
    th_meal: '餐點', th_price: '單價', th_qty: '數量', th_subtotal: '小計',
    summary_orders_label: '總訂餐筆數', unit_orders: '筆', summary_amount_label: '應繳總金額',
    section_query: '依座號查詢', placeholder_query: '輸入座號查詢', btn_query: '查詢 →',
    section_file: '檔案備份 / 讀取', btn_export: '💾 匯出 JSON', btn_export_csv: '📊 匯出 CSV', btn_import: '📁 讀取檔案',
    section_log: '即時登記明細', log_empty: '尚無登記紀錄',
    footer_system: '校園午餐訂餐系統',
    toast_seat_invalid: '⚠ 座號須為 1~50 的整數', toast_meal_invalid: '⚠ 請選擇有效的餐點',
    toast_order_success: '✓ 座號 {seat} 訂購「{meal}」成功',
    toast_no_export: '⚠ 尚無訂單可匯出', toast_exported: '✓ JSON 檔案已匯出',
    toast_imported: '✓ 已匯入 {count} 筆訂單',
    toast_invalid_format: '⚠ 檔案格式不正確', toast_read_failed: ' 讀取檔案失敗',
    toast_query_invalid: '⚠ 請輸入 1~50 的座號',
    query_no_record: '座號 {seat} 尚無訂餐紀錄', query_title: '座號 {seat}',
    query_subtotal: '小計：${total}（共 {count} 筆）', log_seat: '座號 {seat}',
    meal_placeholder: '-- 請選擇餐點 --',
    update_title_v15: '版本 beta v1.5',
    update_v15_1: '添加了 Admin Panel [需通行密鑰]',
    update_v15_2: '新增設定功能 現在已可以完全自訂UI顏色',
    update_v15_3: '新增設定功能 添加了是否關閉標題文字的邊框',
    update_v15_4: '刪除了上方欄位的「統計」[已移植到 Admin Panel]',
    update_v15_5: '刪除了右上角深/淺色的切換按鈕 [已由設定裡的「外觀」替代]',
    update_v15_6: '修復了「Admin」按鈕錯誤的問題',
    update_v15_7: '其他的我忘了 :)',
    update_title_v14fix: '版本 beta v1.4 FIX',
    update_v14fix_1: '修復了設定中「減少動態效果」功能無效的問題',
    update_title_v14: '版本 beta v1.4',
    update_v14_1: '修復某些 UI 莫名其妙偏移本來的位置',
    update_v14_2: '為統計添加了更完整的功能 使其更有實用性 [可能有錯誤]',
    update_v14_3: '重製了「設定」的 UI 介面',
    update_title_v135: '版本 beta v1.35',
    update_v135_1: '修復某些 UI 莫名其妙居中的問題',
    update_v135_2: '修改了「設定」以及「更新」介面的背景透明度，使其更容易使用',
    update_v135_3: '新增設定功能：現在可以自訂 UI 顏色 [未完善，不建議使用]',
    update_v135_4: '新增了「減少動態效果」',
    update_title_v13: '版本 beta v1.3',
    update_v13_1: '修復 UI 的重疊問題',
    update_v13_2: '新增語言「韓文、中文 粵語、日本語」',
    update_v13_3: '新增設定功能，現在可以在設定裡調整字體大小與主題',
    update_title_v12: '版本 beta v1.2',
    update_v12_1: '完全適配了移動端的顯示問題 [?]',
    update_v12_2: '添加說明',
    update_v12_3: '和修復一些介面顯示重疊的問題',
    update_title_v111: 'BETA V1.11 更新', update_v111_fixes: '修復了自動語言自動適配的問題',
    update_title_v11: 'BETA V1.1 更新', update_v11_new: '添加了中/英文切換', update_v11_fixes: '修復了已知的 UI 介面問題',
    help_title: '系統說明', help_intro_title: '系統簡介',
    help_intro_text: '本系統為班級午餐統一登記平台，讓小老師能在每天早上統一登記全班訂餐資料，並自動計算金額與統計數量，方便向餐廳下單與結帳。',
    help_features_title: '主要功能',
    help_feature_1: '菜單管理：內建 5 項菜單，啟動時完整顯示',
    help_feature_2: '訂餐登記：輸入座號與餐點完成訂單',
    help_feature_3: '輸入驗證：座號 1~50、餐點須在菜單範圍內',
    help_feature_4: '統計報表：自動計算各品項數量與小計',
    help_feature_5: '檔案備份：可匯出/匯入 JSON 檔案',
    help_feature_6: '多語言支援：中文、簡體中文、粵語、日本語、英文、韓文',
    help_steps_title: '使用步驟',
    help_step_1_title: '輸入座號', help_step_1_text: '在「訂餐登記」區塊輸入座號（1-50）',
    help_step_2_title: '選擇餐點', help_step_2_text: '從下拉選單中選擇要訂購的餐點',
    help_step_3_title: '新增訂單', help_step_3_text: '點擊「新增訂單」按鈕完成登記',
    help_step_4_title: '查看統計', help_step_4_text: '在右側查看統計報表與總金額',
    help_notes_title: '注意事項',
    help_note_1: '座號必須為 1 到 50 的整數',
    help_note_2: '必須選擇有效的餐點才能新增訂單',
    help_note_3: '可重複為同一座號新增多筆訂單',
    help_note_4: '建議定期匯出 JSON 備份資料',
    settings_title: '設定',
    setting_appearance: '外觀',
    setting_appearance_desc: '自訂系統的外觀與主題',
    setting_accessibility: '輔助功能',
    setting_accessibility_desc: '調整動畫與動態效果',
    setting_display: '顯示',
    setting_display_desc: '調整文字大小與預覽效果',
    setting_text_outline: '文字邊框',
    setting_text_outline_desc: '開啟後標題文字會顯示白色描邊效果',
    theme_light: '淺色',
    theme_dark_gray: '深灰',
    theme_dark: '深色',
    theme_blue: '藍色',
    theme_auto: '自動',
    theme_custom: '自訂',
    custom_colors_title: '自訂顏色',
    custom_color_bg: '背景色',
    custom_color_fg: '文字色',
    custom_color_muted: '次要文字',
    custom_color_border: '邊框色',
    custom_color_card: '卡片背景',
    custom_color_accent: '強調色',
    custom_apply: '套用',
    custom_reset: '重置',
    custom_saved: '✓ 自訂主題已套用',
    custom_reset_confirm: '確定要重置為預設主題嗎？',
    toggle_device_theme: '與設備主題相同',
    toggle_reduce_motion: '減少動態效果',
    slider_font_size: '文本大小',
    preview_label: '預覽',
    preview_text: '這是一段預覽文字，用來展示當前設定的文本大小效果。',
    admin_password_title: '管理員驗證',
    admin_password_subtitle: '請輸入通行密鑰以繼續',
    admin_cancel: '取消',
    admin_confirm: '確認',
    admin_panel_title: 'Admin Panel',
    admin_tab_dashboard: '儀表板',
    admin_tab_announcements: '公告管理',
    admin_tab_orders: '訂單管理',
    admin_tab_menu: '菜單管理',
    admin_tab_stats: '統計報表',
    admin_tab_data: '資料管理',
    admin_dashboard_welcome: '歡迎回來，管理員',
    admin_dashboard_total_orders: '總訂單數',
    admin_dashboard_total_revenue: '總金額',
    admin_dashboard_avg_order: '平均訂單',
    admin_dashboard_active_menu: '可用菜單',
    admin_dashboard_recent_orders: '最近訂單',
    admin_dashboard_no_orders: '尚無訂單',
    admin_announce_title: '公告管理',
    admin_announce_create: '建立公告',
    admin_announce_text: '公告內容',
    admin_announce_placeholder: '輸入公告內容...',
    admin_announce_create_btn: '發布',
    admin_announce_no_announce: '尚無公告',
    admin_announce_delete: '刪除',
    admin_order_title: '訂單管理',
    admin_order_no_orders: '尚無訂單',
    admin_order_delete: '刪除',
    admin_order_clear_all: '清空全部',
    admin_order_export: '匯出',
    admin_stats_title: '統計報表',
    admin_stats_empty: '尚無訂單資料',
    admin_stats_export_csv: '📊 匯出 CSV',
    admin_stats_print: '🖨️ 列印',
    admin_stats_clear: '🗑️ 清空全部',
    admin_menu_title: '菜單管理',
    admin_menu_edit_price: '編輯價格',
    admin_menu_toggle: '切換',
    admin_menu_save: '儲存',
    admin_menu_status_active: '啟用',
    admin_menu_status_inactive: '停用',
    admin_menu_add_title: ' 新增菜品',
    admin_menu_add_name: '菜名',
    admin_menu_add_price: '價格',
    admin_menu_add_btn: '新增',
    admin_menu_add_name_placeholder: '輸入菜名...',
    admin_menu_add_price_placeholder: '輸入價格...',
    admin_menu_delete_confirm: '確定要刪除「{name}」嗎？此操作無法復原。',
    admin_menu_add_success: '✓ 已新增菜品「{name}」',
    admin_menu_delete_success: '✓ 已刪除菜品「{name}」',
    admin_menu_updated: '✓ 菜單已更新',
    admin_data_title: '資料管理',
    admin_data_export_json: '匯出 JSON',
    admin_data_export_csv: '匯出 CSV',
    admin_data_import: '匯入資料',
    admin_data_reset: '重置所有資料',
    admin_data_reset_confirm: '此操作將刪除所有訂單和公告資料，且無法復原。確定要繼續嗎？',
    admin_data_reset_success: '✓ 所有資料已重置',
    admin_data_import_success: '✓ 資料已成功匯入',
    admin_announce_created: '✓ 公告已發布',
    admin_announce_deleted: '✓ 公告已刪除',
    admin_order_deleted: '✓ 訂單已刪除',
    admin_order_cleared: '✓ 所有訂單已清空',
    admin_menu_save_success: '✓ 已儲存「{name}」的價格：${price}'
  },
  'zh-CN': {
    update_btn: '更新内容',
    lang_zh: '中文', lang_zhcn: '简体中文', lang_yue: '中文 粵語', lang_ja: '日本語', lang_en: 'English', lang_ko: '한국어',
    nav_menu: '菜单', nav_order: '订餐', nav_stats: '统计', nav_help: '说明',
    hero_title: '校园午餐<br><span class="accent">订餐系统</span>',
    hero_subtitle: '班级午餐统一登记平台。输入座号与餐点，自动计算金额与统计数量，方便向餐厅下单与结账。',
    meta_orders: '总订单数', meta_amount: '应缴总额', meta_items: '菜单品项',
    section_order: '订餐登记', label_seat: '座号 (1 - 50)', placeholder_seat: '输入座号',
    label_meal: '选择餐点', placeholder_meal: '-- 请选择餐点 --',
    btn_add: '➕ 新增订单', section_stats: '统计报表',
    th_meal: '餐点', th_price: '单价', th_qty: '数量', th_subtotal: '小计',
    summary_orders_label: '总订餐笔数', unit_orders: '笔', summary_amount_label: '应缴总金额',
    section_query: '依座号查询', placeholder_query: '输入座号查询', btn_query: '查询 →',
    section_file: '档案备份 / 读取', btn_export: '💾 汇出 JSON', btn_export_csv: '📊 汇出 CSV', btn_import: '📁 读取档案',
    section_log: '即时登记明细', log_empty: '尚无登记纪录',
    footer_system: '校园午餐订餐系统',
    toast_seat_invalid: ' 座号须为 1~50 的整数', toast_meal_invalid: ' 请选择有效的餐点',
    toast_order_success: '✓ 座号 {seat} 订购「{meal}」成功',
    toast_no_export: '⚠ 尚无订单可汇出', toast_exported: '✓ JSON 档案已汇出',
    toast_imported: '✓ 已汇入 {count} 笔订单',
    toast_invalid_format: '⚠ 档案格式不正确', toast_read_failed: '⚠ 读取档案失败',
    toast_query_invalid: '⚠ 请输入 1~50 的座号',
    query_no_record: '座号 {seat} 尚无订餐纪录', query_title: '座号 {seat}',
    query_subtotal: '小计：${total}（共 {count} 笔）', log_seat: '座号 {seat}',
    meal_placeholder: '-- 请选择餐点 --',
    update_title_v15: '版本 beta v1.5',
    update_v15_1: '添加了 Admin Panel [需通行密钥]',
    update_v15_2: '新增设定功能 现在已可以完全自订UI颜色',
    update_v15_3: '新增设定功能 添加了是否关闭标题文字的边框',
    update_v15_4: '删除了上方栏位的「统计」[已移植到 Admin Panel]',
    update_v15_5: '删除了右上角深/浅色的切换按钮 [已由设定里的「外观」替代]',
    update_v15_6: '修复了「Admin」按钮错误的问题',
    update_v15_7: '其他的我忘了 :)',
    update_title_v14fix: '版本 beta v1.4 FIX',
    update_v14fix_1: '修复了设定中「减少动态效果」功能无效的问题',
    update_title_v14: '版本 beta v1.4',
    update_v14_1: '修复某些 UI 莫名其妙偏移本来的位置',
    update_v14_2: '为统计添加了更完整的功能 使其更有实用性 [可能有错误]',
    update_v14_3: '重制了「设定」的 UI 介面',
    update_title_v135: '版本 beta v1.35',
    update_v135_1: '修复某些 UI 莫名其妙居中的问题',
    update_v135_2: '修改了「设定」以及「更新」界面的背景透明度，使其更容易使用',
    update_v135_3: '新增设定功能：现在可以自订 UI 颜色 [未完善，不建议使用]',
    update_v135_4: '新增了「减少动态效果」',
    update_title_v13: '版本 beta v1.3',
    update_v13_1: '修复 UI 的重叠问题',
    update_v13_2: '新增语言「韩文、中文 粤语、日本語」',
    update_v13_3: '新增设定功能，现在可以在设定里调整字体大小与主题',
    update_title_v12: '版本 beta v1.2',
    update_v12_1: '完全适配了移动端的显示问题 [?]',
    update_v12_2: '添加说明',
    update_v12_3: '和修复一些界面显示重叠的问题',
    update_title_v111: 'BETA V1.11 更新', update_v111_fixes: '修复了自动语言自动适配的问题',
    update_title_v11: 'BETA V1.1 更新', update_v11_new: '添加了中/英文切换', update_v11_fixes: '修复了已知的 UI 界面问题',
    help_title: '系统说明', help_intro_title: '系统简介',
    help_intro_text: '本系统为班级午餐统一登记平台，让小老师能在每天早上统一登记全班订餐资料，并自动计算金额与统计数量，方便向餐厅下单与结账。',
    help_features_title: '主要功能',
    help_feature_1: '菜单管理：内建 5 项菜单，启动时完整显示',
    help_feature_2: '订餐登记：输入座号与餐点完成订单',
    help_feature_3: '输入验证：座号 1~50、餐点须在菜单范围内',
    help_feature_4: '统计报表：自动计算各品项数量与小计',
    help_feature_5: '档案备份：可汇出/汇入 JSON 档案',
    help_feature_6: '多语言支援：中文、简体中文、粤语、日本語、英文、韩文',
    help_steps_title: '使用步骤',
    help_step_1_title: '输入座号', help_step_1_text: '在「订餐登记」区块输入座号（1-50）',
    help_step_2_title: '选择餐点', help_step_2_text: '从下拉选单中选择要订购的餐点',
    help_step_3_title: '新增订单', help_step_3_text: '点击「新增订单」按钮完成登记',
    help_step_4_title: '查看统计', help_step_4_text: '在右侧查看统计报表与总金额',
    help_notes_title: '注意事项',
    help_note_1: '座号必须为 1 到 50 的整数',
    help_note_2: '必须选择有效的餐点才能新增订单',
    help_note_3: '可重复为同一座号新增多笔订单',
    help_note_4: '建议定期汇出 JSON 备份资料',
    settings_title: '设置',
    setting_appearance: '外观',
    setting_appearance_desc: '自定义系统的外观与主题',
    setting_accessibility: '辅助功能',
    setting_accessibility_desc: '调整动画与动态效果',
    setting_display: '显示',
    setting_display_desc: '调整文字大小与预览效果',
    setting_text_outline: '文字边框',
    setting_text_outline_desc: '开启后标题文字会显示白色描边效果',
    theme_light: '浅色',
    theme_dark_gray: '深灰',
    theme_dark: '深色',
    theme_blue: '蓝色',
    theme_auto: '自动',
    theme_custom: '自定义',
    custom_colors_title: '自定义颜色',
    custom_color_bg: '背景色',
    custom_color_fg: '文字色',
    custom_color_muted: '次要文字',
    custom_color_border: '边框色',
    custom_color_card: '卡片背景',
    custom_color_accent: '强调色',
    custom_apply: '套用',
    custom_reset: '重置',
    custom_saved: '✓ 自定义主题已套用',
    custom_reset_confirm: '确定要重置为预设主题吗？',
    toggle_device_theme: '与设备主题相同',
    toggle_reduce_motion: '减少动态效果',
    slider_font_size: '文本大小',
    preview_label: '预览',
    preview_text: '这是一段预览文字，用来展示当前设定的文本大小效果。',
    admin_password_title: '管理员验证',
    admin_password_subtitle: '请输入通行密钥以继续',
    admin_cancel: '取消',
    admin_confirm: '确认',
    admin_panel_title: 'Admin Panel',
    admin_tab_dashboard: '仪表板',
    admin_tab_announcements: '公告管理',
    admin_tab_orders: '订单管理',
    admin_tab_menu: '菜单管理',
    admin_tab_stats: '统计报表',
    admin_tab_data: '资料管理',
    admin_dashboard_welcome: '欢迎回来，管理员',
    admin_dashboard_total_orders: '总订单数',
    admin_dashboard_total_revenue: '总金额',
    admin_dashboard_avg_order: '平均订单',
    admin_dashboard_active_menu: '可用菜单',
    admin_dashboard_recent_orders: '最近订单',
    admin_dashboard_no_orders: '尚无订单',
    admin_announce_title: '公告管理',
    admin_announce_create: '建立公告',
    admin_announce_text: '公告内容',
    admin_announce_placeholder: '输入公告内容...',
    admin_announce_create_btn: '发布',
    admin_announce_no_announce: '尚无公告',
    admin_announce_delete: '删除',
    admin_order_title: '订单管理',
    admin_order_no_orders: '尚无订单',
    admin_order_delete: '删除',
    admin_order_clear_all: '清空全部',
    admin_order_export: '汇出',
    admin_stats_title: '统计报表',
    admin_stats_empty: '尚无订单资料',
    admin_stats_export_csv: '📊 汇出 CSV',
    admin_stats_print: '🖨️ 列印',
    admin_stats_clear: '🗑️ 清空全部',
    admin_menu_title: '菜单管理',
    admin_menu_edit_price: '编辑价格',
    admin_menu_toggle: '切换',
    admin_menu_save: '储存',
    admin_menu_status_active: '启用',
    admin_menu_status_inactive: '停用',
    admin_menu_add_title: '➕ 新增菜品',
    admin_menu_add_name: '菜名',
    admin_menu_add_price: '价格',
    admin_menu_add_btn: '新增',
    admin_menu_add_name_placeholder: '输入菜名...',
    admin_menu_add_price_placeholder: '输入价格...',
    admin_menu_delete_confirm: '确定要删除「{name}」吗？此操作无法复原。',
    admin_menu_add_success: '✓ 已新增菜品「{name}」',
    admin_menu_delete_success: '✓ 已删除菜品「{name}」',
    admin_menu_updated: '✓ 菜单已更新',
    admin_data_title: '资料管理',
    admin_data_export_json: '汇出 JSON',
    admin_data_export_csv: '汇出 CSV',
    admin_data_import: '汇入资料',
    admin_data_reset: '重置所有资料',
    admin_data_reset_confirm: '此操作将删除所有订单和公告资料，且无法复原。确定要继续吗？',
    admin_data_reset_success: '✓ 所有资料已重置',
    admin_data_import_success: '✓ 资料已成功汇入',
    admin_announce_created: '✓ 公告已发布',
    admin_announce_deleted: '✓ 公告已删除',
    admin_order_deleted: '✓ 订单已删除',
    admin_order_cleared: '✓ 所有订单已清空',
    admin_menu_save_success: '✓ 已储存「{name}」的价格：${price}'
  },
  yue: {
    update_btn: '更新內容',
    lang_zh: '中文', lang_zhcn: '简体中文', lang_yue: '中文 粵語', lang_ja: '日本語', lang_en: 'English', lang_ko: '한국어',
    nav_menu: '餐牌', nav_order: '訂餐', nav_stats: '統計', nav_help: '說明',
    hero_title: '校園午餐<br><span class="accent">訂餐系統</span>',
    hero_subtitle: '班級午餐統一登記平台。輸入座號同餐點，自動計算金額同統計數量，方便向餐廳落單同結帳。',
    meta_orders: '總訂單數', meta_amount: '應繳總額', meta_items: '餐牌品項',
    section_order: '訂餐登記', label_seat: '座號 (1 - 50)', placeholder_seat: '輸入座號',
    label_meal: '選餐點', placeholder_meal: '-- 請選餐點 --',
    btn_add: ' 新增訂單', section_stats: '統計報表',
    th_meal: '餐點', th_price: '單價', th_qty: '數量', th_subtotal: '小計',
    summary_orders_label: '總訂餐筆數', unit_orders: '筆', summary_amount_label: '應繳總金額',
    section_query: '按座號查詢', placeholder_query: '輸入座號查詢', btn_query: '查詢 →',
    section_file: '檔案備份 / 讀取', btn_export: '💾 匯出 JSON', btn_export_csv: '📊 匯出 CSV', btn_import: '📁 讀取檔案',
    section_log: '即時登記明細', log_empty: '未有登記紀錄',
    footer_system: '校園午餐訂餐系統',
    toast_seat_invalid: '⚠ 座號必須係 1~50 整數', toast_meal_invalid: ' 請選有效嘅餐點',
    toast_order_success: '✓ 座號 {seat} 訂購「{meal}」成功',
    toast_no_export: '⚠ 未有訂單可匯出', toast_exported: '✓ JSON 檔案已匯出',
    toast_imported: '✓ 已匯入 {count} 筆訂單',
    toast_invalid_format: '⚠ 檔案格式唔正確', toast_read_failed: '⚠ 讀取檔案失敗',
    toast_query_invalid: '⚠ 請輸入 1~50 嘅座號',
    query_no_record: '座號 {seat} 未有訂餐紀錄', query_title: '座號 {seat}',
    query_subtotal: '小計：${total}（共 {count} 筆）', log_seat: '座號 {seat}',
    meal_placeholder: '-- 請選餐點 --',
    update_title_v15: '版本 beta v1.5',
    update_v15_1: '新增咗 Admin Panel [需要通行密鑰]',
    update_v15_2: '新增設定功能 而家可以完全自訂UI顏色',
    update_v15_3: '新增設定功能 添加咗是否關閉標題文字邊框',
    update_v15_4: '刪除上方欄位「統計」[已移植到 Admin Panel]',
    update_v15_5: '刪除右上角深/淺色嘅切換按鈕 [已由設定入面嘅「外觀」替代]',
    update_v15_6: '修復咗「Admin」按鈕錯誤問題',
    update_v15_7: '其他嘅我唔記得咗 :)',
    update_title_v14fix: '版本 beta v1.4 FIX',
    update_v14fix_1: '修復咗設定中「減少動態效果」功能無效嘅問題',
    update_title_v14: '版本 beta v1.4',
    update_v14_1: '修復某些 UI 莫名其妙偏移本來位置',
    update_v14_2: '為統計添加更完整功能 使其更有實用性 [可能有錯誤]',
    update_v14_3: '重製「設定」嘅 UI 介面',
    update_title_v135: '版本 beta v1.35',
    update_v135_1: '修復某些 UI 莫名其妙居中問題',
    update_v135_2: '修改「設定」同「更新」介面背景透明度，令更容易使用',
    update_v135_3: '新增設定功能：而家可以自訂 UI 顏色 [未完善，唔建議使用]',
    update_v135_4: '新增咗「減少動態效果」',
    update_title_v13: '版本 beta v1.3',
    update_v13_1: '修復咗 UI 重疊問題',
    update_v13_2: '新增語言「韓文、中文粵語、日本語」',
    update_v13_3: '新增設定功能，而家可以設定入面調整字體大小同主題',
    update_title_v12: '版本 beta v1.2',
    update_v12_1: '完全適配移動端顯示問題 [?]',
    update_v12_2: '新增說明',
    update_v12_3: '同修復一啲介面顯示重疊問題',
    update_title_v111: 'BETA V1.11 更新', update_v111_fixes: '修復咗自動語言自動適配問題',
    update_title_v11: 'BETA V1.1 更新', update_v11_new: '新增中/英文切換', update_v11_fixes: '修復咗已知 UI 介面問題',
    help_title: '系統說明', help_intro_title: '系統簡介',
    help_intro_text: '本系統係班級午餐統一登記平台，畀小老師可以喺每日朝早統一登記全班訂餐資料，並自動計算金額同統計數量，方便向餐廳落單同結帳。',
    help_features_title: '主要功能',
    help_feature_1: '餐牌管理：內建 5 項餐牌，啟動時完整顯示',
    help_feature_2: '訂餐登記：輸入座號同餐點完成訂單',
    help_feature_3: '輸入驗證：座號 1~50、餐點必須喺餐牌範圍內',
    help_feature_4: '統計報表：自動計算各項數量同小計',
    help_feature_5: '檔案備份：可匯出/匯入 JSON 檔案',
    help_feature_6: '多語言支援：中文、簡體中文、語、日本語、英文、韓文',
    help_steps_title: '使用步驟',
    help_step_1_title: '輸入座號', help_step_1_text: '「訂餐登記」區塊輸入座號（1-50）',
    help_step_2_title: '選餐點', help_step_2_text: '從下拉選單中選要訂購餐點',
    help_step_3_title: '新增訂單', help_step_3_text: '「新增訂單」按鈕完成登記',
    help_step_4_title: '查看統計', help_step_4_text: '右側查看統計報表同總金額',
    help_notes_title: '注意事項',
    help_note_1: '座號必須係 1 到 50 整數',
    help_note_2: '必須揀選有效嘅餐點先可以新增訂單',
    help_note_3: '可以重複為同一座號新增多筆訂單',
    help_note_4: '建議定期匯出 JSON 備份資料',
    settings_title: '設定',
    setting_appearance: '外觀',
    setting_appearance_desc: '自訂系統外觀同主題',
    setting_accessibility: '輔助功能',
    setting_accessibility_desc: '調整動畫同動態效果',
    setting_display: '顯示',
    setting_display_desc: '調整文字大小同預覽效果',
    setting_text_outline: '文字邊框',
    setting_text_outline_desc: '開啟後標題文字會顯示白色描邊效果',
    theme_light: '淺色',
    theme_dark_gray: '深灰',
    theme_dark: '深色',
    theme_blue: '藍色',
    theme_auto: '自動',
    theme_custom: '自訂',
    custom_colors_title: '自訂顏色',
    custom_color_bg: '背景色',
    custom_color_fg: '文字色',
    custom_color_muted: '次要文字',
    custom_color_border: '邊框色',
    custom_color_card: '卡片背景',
    custom_color_accent: '強調色',
    custom_apply: '套用',
    custom_reset: '重置',
    custom_saved: '✓ 自訂主題已套用',
    custom_reset_confirm: '確定要重置為預設主題嗎？',
    toggle_device_theme: '與設備主題相同',
    toggle_reduce_motion: '減少動態效果',
    slider_font_size: '文字大小',
    preview_label: '預覽',
    preview_text: '呢段係預覽文字，用展示而家設定文字大小效果。',
    admin_password_title: '管理員驗證',
    admin_password_subtitle: '請輸入通行密鑰以繼續',
    admin_cancel: '取消',
    admin_confirm: '確認',
    admin_panel_title: 'Admin Panel',
    admin_tab_dashboard: '儀表板',
    admin_tab_announcements: '公告管理',
    admin_tab_orders: '訂單管理',
    admin_tab_menu: '菜單管理',
    admin_tab_stats: '統計報表',
    admin_tab_data: '資料管理',
    admin_dashboard_welcome: '歡迎回來，管理員',
    admin_dashboard_total_orders: '總訂單數',
    admin_dashboard_total_revenue: '總金額',
    admin_dashboard_avg_order: '平均訂單',
    admin_dashboard_active_menu: '可用菜單',
    admin_dashboard_recent_orders: '最近訂單',
    admin_dashboard_no_orders: '尚無訂單',
    admin_announce_title: '公告管理',
    admin_announce_create: '建立公告',
    admin_announce_text: '公告內容',
    admin_announce_placeholder: '輸入公告內容...',
    admin_announce_create_btn: '發布',
    admin_announce_no_announce: '尚無公告',
    admin_announce_delete: '刪除',
    admin_order_title: '訂單管理',
    admin_order_no_orders: '尚無訂單',
    admin_order_delete: '刪除',
    admin_order_clear_all: '清空全部',
    admin_order_export: '匯出',
    admin_stats_title: '統計報表',
    admin_stats_empty: '尚無訂單資料',
    admin_stats_export_csv: '📊 匯出 CSV',
    admin_stats_print: '️ 列印',
    admin_stats_clear: '🗑️ 清空全部',
    admin_menu_title: '菜單管理',
    admin_menu_edit_price: '編輯價格',
    admin_menu_toggle: '切換',
    admin_menu_save: '儲存',
    admin_menu_status_active: '啟用',
    admin_menu_status_inactive: '停用',
    admin_menu_add_title: '➕ 新增菜品',
    admin_menu_add_name: '菜名',
    admin_menu_add_price: '價格',
    admin_menu_add_btn: '新增',
    admin_menu_add_name_placeholder: '輸入菜名...',
    admin_menu_add_price_placeholder: '輸入價格...',
    admin_menu_delete_confirm: '確定要刪除「{name}」嗎？此操作無法復原。',
    admin_menu_add_success: '✓ 已新增菜品「{name}」',
    admin_menu_delete_success: '✓ 已刪除菜品「{name}」',
    admin_menu_updated: '✓ 菜單已更新',
    admin_data_title: '資料管理',
    admin_data_export_json: '匯出 JSON',
    admin_data_export_csv: '匯出 CSV',
    admin_data_import: '匯入資料',
    admin_data_reset: '重置所有資料',
    admin_data_reset_confirm: '此操作將刪除所有訂單和公告資料，且無法復原。確定要繼續嗎？',
    admin_data_reset_success: '✓ 所有資料已重置',
    admin_data_import_success: '✓ 資料已成功匯入',
    admin_announce_created: '✓ 公告已發布',
    admin_announce_deleted: '✓ 公告已刪除',
    admin_order_deleted: '✓ 訂單已刪除',
    admin_order_cleared: '✓ 所有訂單已清空',
    admin_menu_save_success: '✓ 已儲存「{name}」價格：${price}'
  },
  ja: {
    update_btn: '更新内容',
    lang_zh: '中文', lang_zhcn: '简体中文', lang_yue: '中文 粵語', lang_ja: '日本語', lang_en: 'English', lang_ko: '한국어',
    nav_menu: 'メニュー', nav_order: '注文', nav_stats: '統計', nav_help: 'ヘルプ',
    hero_title: 'キャンパスランチ<br><span class="accent">注文システム</span>',
    hero_subtitle: '学級ランチ統一登録プラットフォーム。座席番号と食事を入力すると、金額を自動計算し数量を統計して、レストランへの注文と決済が便利です。',
    meta_orders: '総注文数', meta_amount: '応繳総額', meta_items: 'メニュー品目',
    section_order: '注文登録', label_seat: '座席番号 (1 - 50)', placeholder_seat: '座席番号を入力',
    label_meal: '食事を選択', placeholder_meal: '-- 食事を選択してください --',
    btn_add: '➕ 注文を追加', section_stats: '統計レポート',
    th_meal: '食事', th_price: '単価', th_qty: '数量', th_subtotal: '小計',
    summary_orders_label: '総注文筆数', unit_orders: '筆', summary_amount_label: '応繳総金額',
    section_query: '座席番号で検索', placeholder_query: '座席番号を入力して検索', btn_query: '検索 →',
    section_file: 'ファイルバックアップ / 読取', btn_export: '💾 JSON エクスポート', btn_export_csv: '📊 CSV エクスポート', btn_import: '📁 ファイル読取',
    section_log: '即時登録明細', log_empty: '登録記録なし',
    footer_system: 'キャンパスランチ注文システム',
    toast_seat_invalid: '⚠ 座席番号は 1~50 の整数である必要があります', toast_meal_invalid: '⚠ 有効な食事を選択してください',
    toast_order_success: '✓ 座席 {seat} 「{meal}」注文成功',
    toast_no_export: '⚠ エクスポート可能な注文がありません', toast_exported: '✓ JSON ファイルをエクスポートしました',
    toast_imported: '✓ {count} 筆の注文をインポートしました',
    toast_invalid_format: ' ファイル形式が正しくありません', toast_read_failed: '⚠ ファイル読取失敗',
    toast_query_invalid: '⚠ 1~50 の座席番号を入力してください',
    query_no_record: '座席 {seat} に注文記録がありません', query_title: '座席 {seat}',
    query_subtotal: '小計：${total}（共 {count} 筆）', log_seat: '座席 {seat}',
    meal_placeholder: '-- 食事を選択してください --',
    update_title_v15: 'バージョン beta v1.5',
    update_v15_1: 'Admin Panel を追加 [アクセスコード必要]',
    update_v15_2: '設定機能を追加 UIカラーを完全にカスタマイズ可能に',
    update_v15_3: '設定機能を追加 タイトル文字の輪郭線のオン/オフを追加',
    update_v15_4: '上部バーの「統計」を削除 [Admin Panel に移植]',
    update_v15_5: '右上のダーク/ライト切り替えボタンを削除 [設定の「外観」で代替]',
    update_v15_6: '「Admin」ボタンの不具合を修正',
    update_v15_7: 'その他は忘れました :)',
    update_title_v14fix: 'バージョン beta v1.4 FIX',
    update_v14fix_1: '設定の「モーションを減らす」機能が効かない問題を修正',
    update_title_v14: 'バージョン beta v1.4',
    update_v14_1: '一部の UI が本来の位置からずれる問題を修正',
    update_v14_2: '統計により完全な機能を追加し、実用性を向上 [エラーがある可能性]',
    update_v14_3: '「設定」の UI インターフェースを再設計',
    update_title_v135: 'バージョン beta v1.35',
    update_v135_1: '一部の UI がなぜか中央揃えになる問題を修正',
    update_v135_2: '「設定」および「更新」画面の背景透明度を変更し、使いやすくしました',
    update_v135_3: '新機能：UI カラーのカスタマイズ可能 [未完了、使用非推奨]',
    update_v135_4: '「モーションを減らす」機能を追加',
    update_title_v13: 'バージョン beta v1.3',
    update_v13_1: 'UI の重なり問題を修正',
    update_v13_2: '言語「韓国語、中国語広東語、日本語」を追加',
    update_v13_3: '設定機能を追加、設定でフォントサイズとテーマを調整可能',
    update_title_v12: 'バージョン beta v1.2',
    update_v12_1: 'モバイル端末の表示問題を完全適応 [?]',
    update_v12_2: 'ヘルプを追加',
    update_v12_3: '一部の UI 表示重なり問題を修正',
    update_title_v111: 'BETA V1.11 アップデート', update_v111_fixes: '自動言語自動適応問題を修正',
    update_title_v11: 'BETA V1.1 アップデート', update_v11_new: '中/英語切り替えを追加', update_v11_fixes: '既知の UI インターフェース問題を修正',
    help_title: 'システム説明', help_intro_title: 'システム簡介',
    help_intro_text: '本システムは学級ランチ統一登録プラットフォームで、小先生が毎朝全班の注文資料を統一登録し、金額を自動計算し数量を統計して、レストランへの注文と決済が便利です。',
    help_features_title: '主要機能',
    help_feature_1: 'メニュー管理：内蔵 5 項メニュー、起動時完全表示',
    help_feature_2: '注文登録：座席番号と食事を入力して注文完了',
    help_feature_3: '入力検証：座席番号 1~50、食事はメニュー範囲内',
    help_feature_4: '統計レポート：各品目数量と小計を自動計算',
    help_feature_5: 'ファイルバックアップ：JSON ファイルエクスポート/インポート可能',
    help_feature_6: '多言語支援：中国語、簡体中文、広東語、日本語、英語、韓国語',
    help_steps_title: '使用手順',
    help_step_1_title: '座席番号を入力', help_step_1_text: '「注文登録」區塊で座席番号（1-50）を入力',
    help_step_2_title: '食事を選択', help_step_2_text: 'ドロップダウンメニューから注文する食事を選択',
    help_step_3_title: '注文を追加', help_step_3_text: '「注文を追加」ボタンをクリックして登録完了',
    help_step_4_title: '統計を確認', help_step_4_text: '右側で統計レポートと総金額を確認',
    help_notes_title: '注意事項',
    help_note_1: '座席番号は 1 から 50 までの整数である必要があります',
    help_note_2: '有効な食事を選択しないと注文を追加できません',
    help_note_3: '同じ座席番号に複数の注文を追加できます',
    help_note_4: '定期的に JSON バックアップをエクスポートすることをお勧めします',
    settings_title: '設定',
    setting_appearance: '外観',
    setting_appearance_desc: 'システムの外観とテーマをカスタマイズ',
    setting_accessibility: 'アクセシビリティ',
    setting_accessibility_desc: 'アニメーションとモーション効果を調整',
    setting_display: '表示',
    setting_display_desc: '文字サイズとプレビュー効果を調整',
    setting_text_outline: '文字輪郭',
    setting_text_outline_desc: '有効にするとタイトル文字に白い輪郭線が表示されます',
    theme_light: 'ライト',
    theme_dark_gray: 'ダークグレー',
    theme_dark: 'ダーク',
    theme_blue: 'ブルー',
    theme_auto: '自動',
    theme_custom: 'カスタム',
    custom_colors_title: 'カスタムカラー',
    custom_color_bg: '背景色',
    custom_color_fg: '文字色',
    custom_color_muted: '次要文字',
    custom_color_border: '边框色',
    custom_color_card: '卡片背景',
    custom_color_accent: '強調色',
    custom_apply: '適用',
    custom_reset: 'リセット',
    custom_saved: '✓ カスタムテーマを適用しました',
    custom_reset_confirm: 'デフォルトテーマにリセットしますか？',
    toggle_device_theme: 'デバイスと同じテーマ',
    toggle_reduce_motion: 'モーションを減らす',
    slider_font_size: 'テキストサイズ',
    preview_label: 'プレビュー',
    preview_text: 'これは現在設定されているテキストサイズを示すプレビューテキストです。',
    admin_password_title: '管理者認証',
    admin_password_subtitle: 'アクセスコードを入力して続行してください',
    admin_cancel: 'キャンセル',
    admin_confirm: '確認',
    admin_panel_title: 'Admin Panel',
    admin_tab_dashboard: 'ダッシュボード',
    admin_tab_announcements: '公告管理',
    admin_tab_orders: '注文管理',
    admin_tab_menu: 'メニュー管理',
    admin_tab_stats: '統計レポート',
    admin_tab_data: 'データ管理',
    admin_dashboard_welcome: 'お帰りなさい、管理者',
    admin_dashboard_total_orders: '総注文数',
    admin_dashboard_total_revenue: '総金額',
    admin_dashboard_avg_order: '平均注文',
    admin_dashboard_active_menu: '利用可能メニュー',
    admin_dashboard_recent_orders: '最近の注文',
    admin_dashboard_no_orders: '注文なし',
    admin_announce_title: '公告管理',
    admin_announce_create: '公告作成',
    admin_announce_text: '公告内容',
    admin_announce_placeholder: '公告内容を入力...',
    admin_announce_create_btn: '公開',
    admin_announce_no_announce: '公告なし',
    admin_announce_delete: '削除',
    admin_order_title: '注文管理',
    admin_order_no_orders: '注文なし',
    admin_order_delete: '削除',
    admin_order_clear_all: 'すべて削除',
    admin_order_export: 'エクスポート',
    admin_stats_title: '統計レポート',
    admin_stats_empty: '注文データがありません',
    admin_stats_export_csv: '📊 CSV エクスポート',
    admin_stats_print: '️ 印刷',
    admin_stats_clear: '🗑️ すべて削除',
    admin_menu_title: 'メニュー管理',
    admin_menu_edit_price: '価格編集',
    admin_menu_toggle: '切替',
    admin_menu_save: '保存',
    admin_menu_status_active: '有効',
    admin_menu_status_inactive: '無効',
    admin_menu_add_title: '➕ 新規メニュー追加',
    admin_menu_add_name: 'メニュー名',
    admin_menu_add_price: '価格',
    admin_menu_add_btn: '追加',
    admin_menu_add_name_placeholder: 'メニュー名を入力...',
    admin_menu_add_price_placeholder: '価格を入力...',
    admin_menu_delete_confirm: '「{name}」を削除しますか？この操作は取り消せません。',
    admin_menu_add_success: '✓ メニュー「{name}」を追加しました',
    admin_menu_delete_success: '✓ メニュー「{name}」を削除しました',
    admin_menu_updated: '✓ メニューを更新しました',
    admin_data_title: 'データ管理',
    admin_data_export_json: 'JSON エクスポート',
    admin_data_export_csv: 'CSV エクスポート',
    admin_data_import: 'データインポート',
    admin_data_reset: '全データリセット',
    admin_data_reset_confirm: 'この操作ですべての注文と公告データが削除され、復元できません。続行しますか？',
    admin_data_reset_success: '✓ 全データがリセットされました',
    admin_data_import_success: '✓ データが正常にインポートされました',
    admin_announce_created: '✓ 公告が公開されました',
    admin_announce_deleted: '✓ 公告が削除されました',
    admin_order_deleted: '✓ 注文が削除されました',
    admin_order_cleared: '✓ すべての注文が削除されました',
    admin_menu_save_success: '✓ 「{name}」の価格を保存しました：${price}'
  },
  en: {
    update_btn: 'Update Notes',
    lang_zh: '中文', lang_zhcn: '简体中文', lang_yue: '中文 粵語', lang_ja: '日本語', lang_en: 'English', lang_ko: '한국어',
    nav_menu: 'Menu', nav_order: 'Order', nav_stats: 'Stats', nav_help: 'Help',
    hero_title: 'Campus Lunch<br><span class="accent">Ordering System</span>',
    hero_subtitle: 'A unified registration platform for class lunches. Enter the seat number and meal order, and the system will automatically calculate the amount and count the quantity, making it convenient to place orders and settle payments with the restaurant.',
    meta_orders: 'Total Orders', meta_amount: 'Total Payable', meta_items: 'Menu Items',
    section_order: 'Order Registration', label_seat: 'Seat Number (1 - 50)', placeholder_seat: 'Enter seat number',
    label_meal: 'Select Meal', placeholder_meal: '-- Please select a meal --',
    btn_add: '➕ Add Order', section_stats: 'Statistics Report',
    th_meal: 'Meal', th_price: 'Unit Price', th_qty: 'Qty', th_subtotal: 'Subtotal',
    summary_orders_label: 'Total Orders', unit_orders: 'orders', summary_amount_label: 'Total Amount',
    section_query: 'Query by Seat', placeholder_query: 'Enter seat number', btn_query: 'Query →',
    section_file: 'Backup / Import', btn_export: '💾 Export JSON', btn_export_csv: '📊 Export CSV', btn_import: '📁 Import File',
    section_log: 'Live Order Log', log_empty: 'No records yet',
    footer_system: 'Campus Lunch Ordering System',
    toast_seat_invalid: '⚠ Seat number must be 1-50', toast_meal_invalid: '⚠ Please select a valid meal',
    toast_order_success: '✓ Seat {seat} ordered "{meal}" successfully',
    toast_no_export: '⚠ No orders to export', toast_exported: '✓ JSON file exported',
    toast_imported: '✓ Imported {count} orders',
    toast_invalid_format: '⚠ Invalid file format', toast_read_failed: '⚠ Failed to read file',
    toast_query_invalid: '⚠ Please enter seat 1-50',
    query_no_record: 'Seat {seat} has no order record', query_title: 'Seat {seat}',
    query_subtotal: 'Subtotal: ${total} ({count} orders total)', log_seat: 'Seat {seat}',
    meal_placeholder: '-- Please select a meal --',
    update_title_v15: 'Version beta v1.5',
    update_v15_1: 'Added Admin Panel [requires access key]',
    update_v15_2: 'Added settings feature - UI colors can now be fully customized',
    update_v15_3: 'Added settings feature - added option to toggle title text outline',
    update_v15_4: 'Removed "Statistics" from top bar [migrated to Admin Panel]',
    update_v15_5: 'Removed dark/light toggle button from top right [replaced by "Appearance" in Settings]',
    update_v15_6: 'Fixed "Admin" button bug',
    update_v15_7: 'I forgot the rest :)',
    update_title_v14fix: 'Version beta v1.4 FIX',
    update_v14fix_1: 'Fixed issue where "Reduce motion" setting was not working',
    update_title_v14: 'Version beta v1.4',
    update_v14_1: 'Fixed issue where some UI elements were inexplicably offset from their original positions',
    update_v14_2: 'Added more complete features to statistics for better usability [may contain errors]',
    update_v14_3: 'Redesigned the "Settings" UI interface',
    update_title_v135: 'Version beta v1.35',
    update_v135_1: 'Fixed issue where some UI elements were inexplicably centered',
    update_v135_2: 'Adjusted background transparency of Settings and Update modals for better usability',
    update_v135_3: 'New feature: Custom UI colors [Incomplete, not recommended for use]',
    update_v135_4: 'Added "Reduce motion" option',
    update_title_v13: 'Version beta v1.3',
    update_v13_1: 'Fixed UI overlapping issues',
    update_v13_2: 'Added Korean, Cantonese, and Japanese languages',
    update_v13_3: 'Added settings - you can now adjust font size and theme',
    update_title_v12: 'Version beta v1.2',
    update_v12_1: 'Fully adapted mobile display issues [?]',
    update_v12_2: 'Added Help section',
    update_v12_3: 'Fixed some UI overlapping issues',
    update_title_v111: 'BETA V1.11 UPDATE', update_v111_fixes: 'Fixed automatic language auto-adaptation issue',
    update_title_v11: 'BETA V1.1 UPDATE', update_v11_new: 'Added Chinese/English language switching', update_v11_fixes: 'Fixed known UI interface issues',
    help_title: 'System Help', help_intro_title: 'Introduction',
    help_intro_text: 'This system is a unified registration platform for class lunches, allowing class representatives to register all students\' lunch orders every morning. It automatically calculates amounts and statistics, making it convenient to place orders and settle payments with the restaurant.',
    help_features_title: 'Main Features',
    help_feature_1: 'Menu Management: 5 built-in menu items displayed on startup',
    help_feature_2: 'Order Registration: Enter seat number and meal to complete an order',
    help_feature_3: 'Input Validation: Seat numbers 1-50, meals must be within menu range',
    help_feature_4: 'Statistics Report: Automatically calculates quantities and subtotals',
    help_feature_5: 'File Backup: Export/Import JSON files',
    help_feature_6: 'Multi-language Support: Traditional Chinese, Simplified Chinese, Cantonese, Japanese, English, Korean',
    help_steps_title: 'How to Use',
    help_step_1_title: 'Enter Seat Number', help_step_1_text: 'Enter seat number (1-50) in the "Order Registration" section',
    help_step_2_title: 'Select Meal', help_step_2_text: 'Choose a meal from the dropdown menu',
    help_step_3_title: 'Add Order', help_step_3_text: 'Click "Add Order" button to complete registration',
    help_step_4_title: 'View Statistics', help_step_4_text: 'Check the statistics report and total amount on the right',
    help_notes_title: 'Notes',
    help_note_1: 'Seat number must be an integer between 1 and 50',
    help_note_2: 'A valid meal must be selected to add an order',
    help_note_3: 'Multiple orders can be added for the same seat number',
    help_note_4: 'It is recommended to regularly export JSON backups',
    settings_title: 'Settings',
    setting_appearance: 'Appearance',
    setting_appearance_desc: 'Customize the system appearance and theme',
    setting_accessibility: 'Accessibility',
    setting_accessibility_desc: 'Adjust animations and motion effects',
    setting_display: 'Display',
    setting_display_desc: 'Adjust text size and preview effects',
    setting_text_outline: 'Text Outline',
    setting_text_outline_desc: 'Enable to show white outline effect on title text',
    theme_light: 'Light',
    theme_dark_gray: 'Dark Gray',
    theme_dark: 'Dark',
    theme_blue: 'Blue',
    theme_auto: 'Auto',
    theme_custom: 'Custom',
    custom_colors_title: 'Custom Colors',
    custom_color_bg: 'Background',
    custom_color_fg: 'Text',
    custom_color_muted: 'Muted Text',
    custom_color_border: 'Border',
    custom_color_card: 'Card Background',
    custom_color_accent: 'Accent',
    custom_apply: 'Apply',
    custom_reset: 'Reset',
    custom_saved: '✓ Custom theme applied',
    custom_reset_confirm: 'Are you sure you want to reset to the default theme?',
    toggle_device_theme: 'Same as device',
    toggle_reduce_motion: 'Reduce motion',
    slider_font_size: 'Text Size',
    preview_label: 'Preview',
    preview_text: 'This is a preview text to demonstrate the current font size setting.',
    admin_password_title: 'Admin Verification',
    admin_password_subtitle: 'Please enter the access key to continue',
    admin_cancel: 'Cancel',
    admin_confirm: 'Confirm',
    admin_panel_title: 'Admin Panel',
    admin_tab_dashboard: 'Dashboard',
    admin_tab_announcements: 'Announcements',
    admin_tab_orders: 'Orders',
    admin_tab_menu: 'Menu',
    admin_tab_stats: 'Statistics',
    admin_tab_data: 'Data',
    admin_dashboard_welcome: 'Welcome back, Admin',
    admin_dashboard_total_orders: 'Total Orders',
    admin_dashboard_total_revenue: 'Total Revenue',
    admin_dashboard_avg_order: 'Avg. Order',
    admin_dashboard_active_menu: 'Active Menu',
    admin_dashboard_recent_orders: 'Recent Orders',
    admin_dashboard_no_orders: 'No orders yet',
    admin_announce_title: 'Announcement Management',
    admin_announce_create: 'Create Announcement',
    admin_announce_text: 'Announcement Text',
    admin_announce_placeholder: 'Enter announcement text...',
    admin_announce_create_btn: 'Publish',
    admin_announce_no_announce: 'No announcements',
    admin_announce_delete: 'Delete',
    admin_order_title: 'Order Management',
    admin_order_no_orders: 'No orders yet',
    admin_order_delete: 'Delete',
    admin_order_clear_all: 'Clear All',
    admin_order_export: 'Export',
    admin_stats_title: 'Statistics Report',
    admin_stats_empty: 'No order data',
    admin_stats_export_csv: '📊 Export CSV',
    admin_stats_print: '🖨️ Print',
    admin_stats_clear: '🗑️ Clear All',
    admin_menu_title: 'Menu Management',
    admin_menu_edit_price: 'Edit Price',
    admin_menu_toggle: 'Toggle',
    admin_menu_save: 'Save',
    admin_menu_status_active: 'Active',
    admin_menu_status_inactive: 'Inactive',
    admin_menu_add_title: ' Add New Menu Item',
    admin_menu_add_name: 'Name',
    admin_menu_add_price: 'Price',
    admin_menu_add_btn: 'Add',
    admin_menu_add_name_placeholder: 'Enter menu name...',
    admin_menu_add_price_placeholder: 'Enter price...',
    admin_menu_delete_confirm: 'Are you sure you want to delete "{name}"? This cannot be undone.',
    admin_menu_add_success: '✓ Added menu item "{name}"',
    admin_menu_delete_success: '✓ Deleted menu item "{name}"',
    admin_menu_updated: '✓ Menu updated',
    admin_data_title: 'Data Management',
    admin_data_export_json: 'Export JSON',
    admin_data_export_csv: 'Export CSV',
    admin_data_import: 'Import Data',
    admin_data_reset: 'Reset All Data',
    admin_data_reset_confirm: 'This will delete all order and announcement data and cannot be undone. Are you sure?',
    admin_data_reset_success: '✓ All data has been reset',
    admin_data_import_success: '✓ Data imported successfully',
    admin_announce_created: '✓ Announcement published',
    admin_announce_deleted: '✓ Announcement deleted',
    admin_order_deleted: '✓ Order deleted',
    admin_order_cleared: '✓ All orders cleared',
    admin_menu_save_success: '✓ Saved price for "{name}": ${price}'
  },
  ko: {
    update_btn: '업데이트 내용',
    lang_zh: '中文', lang_zhcn: '简体中文', lang_yue: '中文 語', lang_ja: '日本語', lang_en: 'English', lang_ko: '한국어',
    nav_menu: '메뉴', nav_order: '주문', nav_stats: '통계', nav_help: '도움말',
    hero_title: '캠퍼스 점심<br><span class="accent">주문 시스템</span>',
    hero_subtitle: '학급 점심 통합 등록 플랫폼. 좌석 번호와 식사를 입력하면 금액을 자동 계산하고 수량을 통계하여 식당에 주문하고 결제하기 편리합니다.',
    meta_orders: '총 주문수', meta_amount: '총 납부액', meta_items: '메뉴 품목',
    section_order: '주문 등록', label_seat: '좌석 번호 (1 - 50)', placeholder_seat: '좌석 번호 입력',
    label_meal: '식사 선택', placeholder_meal: '-- 식사를 선택하세요 --',
    btn_add: '➕ 주문 추가', section_stats: '통계 보고서',
    th_meal: '식사', th_price: '단가', th_qty: '수량', th_subtotal: '소계',
    summary_orders_label: '총 주문 건수', unit_orders: '건', summary_amount_label: '총 납부 금액',
    section_query: '좌석 번호로 조회', placeholder_query: '좌석 번호 입력하여 조회', btn_query: '조회 →',
    section_file: '파일 백업 / 읽기', btn_export: '💾 JSON 내보내기', btn_export_csv: '📊 CSV 내보내기', btn_import: '📁 파일 읽기',
    section_log: '실시간 등록 내역', log_empty: '등록 기록 없음',
    footer_system: '캠퍼스 점심 주문 시스템',
    toast_seat_invalid: '⚠ 좌석 번호는 1~50의 정수여야 합니다', toast_meal_invalid: '⚠ 유효한 식사를 선택하세요',
    toast_order_success: '✓ 좌석 {seat} "{meal}" 주문 성공',
    toast_no_export: '⚠ 내보낼 주문이 없습니다', toast_exported: '✓ JSON 파일 내보내기 완료',
    toast_imported: '✓ {count}건 주문 가져오기 완료',
    toast_invalid_format: '⚠ 파일 형식이 올바르지 않습니다', toast_read_failed: '⚠ 파일 읽기 실패',
    toast_query_invalid: '⚠ 1~50의 좌석 번호를 입력하세요',
    query_no_record: '좌석 {seat} 주문 기록 없음', query_title: '좌석 {seat}',
    query_subtotal: '소계: ${total} (총 {count}건)', log_seat: '좌석 {seat}',
    meal_placeholder: '-- 식사를 선택하세요 --',
    update_title_v15: '버전 beta v1.5',
    update_v15_1: 'Admin Panel 추가 [액세스 키 필요]',
    update_v15_2: '설정 기능 추가 - 이제 UI 색상을 완전히 사용자 정의할 수 있습니다',
    update_v15_3: '설정 기능 추가 - 제목 텍스트 윤곽선 토글 옵션 추가',
    update_v15_4: '상단 바의 "통계" 삭제 [Admin Panel로 이전]',
    update_v15_5: '우측 상단의 다크/라이트 전환 버튼 삭제 [설정의 "외관"으로 대체]',
    update_v15_6: '"Admin" 버튼 오류 수정',
    update_v15_7: '나머지는 잊었어요 :)',
    update_title_v14fix: '버전 beta v1.4 FIX',
    update_v14fix_1: '설정에서 "모션 줄이기" 기능이 작동하지 않는 문제 수정',
    update_title_v14: '버전 beta v1.4',
    update_v14_1: '일부 UI가 본래 위치에서偏移되는 문제 수정',
    update_v14_2: '통계에 더 완전한 기능을 추가하여 실용성 향상 [오류가 있을 수 있음]',
    update_v14_3: '"설정" UI 인터페이스 재설계',
    update_title_v135: '버전 beta v1.35',
    update_v135_1: '일부 UI가 가운데 정렬되는 문제 수정',
    update_v135_2: '"설정" 및 "업데이트" 화면의 배경 투명도 조정하여 사용성 향상',
    update_v135_3: '새 기능: UI 색상 사용자 정의 [미완성, 사용 비추천]',
    update_v135_4: '"모션 줄이기" 옵션 추가',
    update_title_v13: '버전 beta v1.3',
    update_v13_1: 'UI 겹침 문제 수정',
    update_v13_2: '한국어, 중국어 광둥어, 일본어 언어 추가',
    update_v13_3: '설정 기능 추가 - 이제 설정에서 글 크기와 테마를 조정할 수 있습니다',
    update_title_v12: '버전 beta v1.2',
    update_v12_1: '모바일 디스플레이 문제 완전 적응 [?]',
    update_v12_2: '도움말 추가',
    update_v12_3: '일부 UI 겹침 문제 수정',
    update_title_v111: 'BETA V1.11 업데이트', update_v111_fixes: '자동 언어 자동 적응 문제 수정',
    update_title_v11: 'BETA V1.1 업데이트', update_v11_new: '중/영어 전환 추가', update_v11_fixes: '알려진 UI 인터페이스 문제 수정',
    help_title: '시스템 도움말', help_intro_title: '시스템 소개',
    help_intro_text: '본 시스템은 학급 점심 통합 등록 플랫폼으로, 반장이 매일 아침 전체 학생의 점심 주문 자료를 통합 등록하고, 금액을 자동 계산하고 수량을 통계하여 식당에 주문하고 결제하기 편리합니다.',
    help_features_title: '주요 기능',
    help_feature_1: '메뉴 관리: 내장 5개 메뉴, 시작 시 완전 표시',
    help_feature_2: '주문 등록: 좌석 번호와 식사 입력하여 주문 완료',
    help_feature_3: '입력 검증: 좌석 번호 1~50, 식사는 메뉴 범위 내',
    help_feature_4: '통계 보고서: 각 품목 수량과 소계 자동 계산',
    help_feature_5: '파일 백업: JSON 파일 내보내기/가져오기 가능',
    help_feature_6: '다국어 지원: 중국어, 간체중국어, 광둥어, 일본어, 영어, 한국어',
    help_steps_title: '사용 방법',
    help_step_1_title: '좌석 번호 입력', help_step_1_text: '"주문 등록" 구역에서 좌석 번호(1-50) 입력',
    help_step_2_title: '식사 선택', help_step_2_text: '드롭다운 메뉴에서 주문할 식사 선택',
    help_step_3_title: '주문 추가', help_step_3_text: '"주문 추가" 버튼 클릭하여 등록 완료',
    help_step_4_title: '통계 확인', help_step_4_text: '오른쪽에서 통계 보고서와 총 금액 확인',
    help_notes_title: '주의사항',
    help_note_1: '좌석 번호는 1에서 50 사이의 정수여야 합니다',
    help_note_2: '유효한 식사를 선택해야 주문을 추가할 수 있습니다',
    help_note_3: '동일한 좌석 번호에 여러 건의 주문을 추가할 수 있습니다',
    help_note_4: '정기적으로 JSON 백업을 내보내는 것을 권장합니다',
    settings_title: '설정',
    setting_appearance: '외관',
    setting_appearance_desc: '시스템 외관과 테마를 사용자 정의',
    setting_accessibility: '접근성',
    setting_accessibility_desc: '애니메이션과 모션 효과 조정',
    setting_display: '표시',
    setting_display_desc: '글자 크기와 미리보기 효과 조정',
    setting_text_outline: '텍스트 윤곽선',
    setting_text_outline_desc: '활성화하면 제목 텍스트에 흰색 윤곽선 효과가 표시됩니다',
    theme_light: '라이트',
    theme_dark_gray: '다크 그레이',
    theme_dark: '다크',
    theme_blue: '블루',
    theme_auto: '자동',
    theme_custom: '사용자 정의',
    custom_colors_title: '사용자 정의 색상',
    custom_color_bg: '배경색',
    custom_color_fg: '텍스트 색상',
    custom_color_muted: '보조 텍스트',
    custom_color_border: '테두리 색상',
    custom_color_card: '카드 배경',
    custom_color_accent: '강조 색상',
    custom_apply: '적용',
    custom_reset: '재설정',
    custom_saved: '✓ 사용자 정의 테마가 적용되었습니다',
    custom_reset_confirm: '기본 테마로 재설정하시겠습니까?',
    toggle_device_theme: '기기와 동일한 테마',
    toggle_reduce_motion: '모션 줄이기',
    slider_font_size: '텍스트 크기',
    preview_label: '미리보기',
    preview_text: '이것은 현재 설정된 텍스트 크기를 보여주는 미리보기 텍스트입니다.',
    admin_password_title: '관리자 인증',
    admin_password_subtitle: '계속하려면 액세스 키를 입력하세요',
    admin_cancel: '취소',
    admin_confirm: '확인',
    admin_panel_title: 'Admin Panel',
    admin_tab_dashboard: '대시보드',
    admin_tab_announcements: '공지 관리',
    admin_tab_orders: '주문 관리',
    admin_tab_menu: '메뉴 관리',
    admin_tab_stats: '통계 보고서',
    admin_tab_data: '데이터 관리',
    admin_dashboard_welcome: '돌아오신 것을 환영합니다, 관리자',
    admin_dashboard_total_orders: '총 주문수',
    admin_dashboard_total_revenue: '총 금액',
    admin_dashboard_avg_order: '평균 주문',
    admin_dashboard_active_menu: '활성 메뉴',
    admin_dashboard_recent_orders: '최근 주문',
    admin_dashboard_no_orders: '주문 없음',
    admin_announce_title: '공지 관리',
    admin_announce_create: '공지 생성',
    admin_announce_text: '공지 내용',
    admin_announce_placeholder: '공지 내용을 입력하세요...',
    admin_announce_create_btn: '게시',
    admin_announce_no_announce: '공지 없음',
    admin_announce_delete: '삭제',
    admin_order_title: '주문 관리',
    admin_order_no_orders: '주문 없음',
    admin_order_delete: '삭제',
    admin_order_clear_all: '모두 삭제',
    admin_order_export: '내보내기',
    admin_stats_title: '통계 보고서',
    admin_stats_empty: '주문 데이터 없음',
    admin_stats_export_csv: ' CSV 내보내기',
    admin_stats_print: '🖨️ 인쇄',
    admin_stats_clear: '🗑️ 모두 삭제',
    admin_menu_title: '메뉴 관리',
    admin_menu_edit_price: '가격 편집',
    admin_menu_toggle: '전환',
    admin_menu_save: '저장',
    admin_menu_status_active: '활성',
    admin_menu_status_inactive: '비활성',
    admin_menu_add_title: '➕ 새 메뉴 항목 추가',
    admin_menu_add_name: '이름',
    admin_menu_add_price: '가격',
    admin_menu_add_btn: '추가',
    admin_menu_add_name_placeholder: '메뉴 이름을 입력하세요...',
    admin_menu_add_price_placeholder: '가격을 입력하세요...',
    admin_menu_delete_confirm: '"{name}"을(를) 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
    admin_menu_add_success: '✓ 메뉴 항목 "{name}" 추가됨',
    admin_menu_delete_success: '✓ 메뉴 항목 "{name}" 삭제됨',
    admin_menu_updated: '✓ 메뉴가 업데이트되었습니다',
    admin_data_title: '데이터 관리',
    admin_data_export_json: 'JSON 내보내기',
    admin_data_export_csv: 'CSV 내보내기',
    admin_data_import: '데이터 가져오기',
    admin_data_reset: '모든 데이터 초기화',
    admin_data_reset_confirm: '이 작업은 모든 주문 및 공지 데이터를 삭제하며 복원할 수 없습니다. 계속하시겠습니까?',
    admin_data_reset_success: '✓ 모든 데이터가 초기화되었습니다',
    admin_data_import_success: '✓ 데이터가 성공적으로 가져왔습니다',
    admin_announce_created: '✓ 공지가 게시되었습니다',
    admin_announce_deleted: '✓ 공지가 삭제되었습니다',
    admin_order_deleted: '✓ 주문이 삭제되었습니다',
    admin_order_cleared: '✓ 모든 주문이 삭제되었습니다',
    admin_menu_save_success: '✓ "{name}"의 가격 저장됨: ${price}'
  }
};

let currentLang = 'zh';
let orders = [];
let selectedMealId = null;
let dropdownOpen = false;
let isDark = false;
let currentFontSize = 16;
let currentTheme = 'light';
let followDevice = false;
let reduceMotion = false;
let textOutline = true;
let mql = null;
let announcements = [];
let adminCurrentTab = 'dashboard';

const langLabels = { 'zh': 'TW', 'zh-CN': 'CN', 'yue': 'YUE', 'ja': 'JP', 'en': 'US', 'ko': 'KR' };
const FONT_SIZES = [12, 14, 15, 16, 18, 20, 24];

const defaultColors = {
  light: { bg: '#fafafa', fg: '#0a0a0a', muted: '#6b6b6b', border: '#e5e5e5', card: '#ffffff', accent: '#5b5fc7' },
  dark: { bg: '#0a0a0a', fg: '#ffffff', muted: '#8a8a8a', border: '#2a2a2a', card: '#141414', accent: '#7b7fd9' },
  'dark-gray': { bg: '#1e1e1e', fg: '#e0e0e0', muted: '#9a9a9a', border: '#3a3a3a', card: '#2a2a2a', accent: '#8b8bf0' },
  blue: { bg: '#1e3a5f', fg: '#e0f0ff', muted: '#a0c0e0', border: '#2a4a6f', card: '#243f60', accent: '#60a0ff' }
};

let customColors = { bg: '#fafafa', fg: '#0a0a0a', muted: '#6b6b6b', border: '#e5e5e5', card: '#ffffff', accent: '#5b5fc7' };
let rgbEnabled = { bg: false, fg: false, muted: false, border: false, card: false, accent: false };
let rgbHue = 0;
let rgbAnimationId = null;

function t(key, params = {}) {
  let text = I18N[currentLang][key] || key;
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return text;
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function startRgbAnimation() {
  if (rgbAnimationId) return;
  function animate() {
    rgbHue = (rgbHue + 1) % 360;
    const root = document.documentElement;
    for (const [key, enabled] of Object.entries(rgbEnabled)) {
      if (enabled) {
        const color = hslToHex(rgbHue, 100, 50);
        root.style.setProperty(`--${key}`, color);
      }
    }
    rgbAnimationId = requestAnimationFrame(animate);
  }
  rgbAnimationId = requestAnimationFrame(animate);
}

function stopRgbAnimation() {
  if (rgbAnimationId) {
    cancelAnimationFrame(rgbAnimationId);
    rgbAnimationId = null;
  }
}

function applyTheme(theme) {
  currentTheme = theme;
  if (theme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyCustomColors(prefersDark ? defaultColors.dark : defaultColors.light);
  } else if (theme === 'custom') {
    applyCustomColors(customColors);
  } else if (defaultColors[theme]) {
    applyCustomColors(defaultColors[theme]);
  }
  updateThemeOptions();
  applyTextOutline();
}

function applyCustomColors(colors) {
  const root = document.documentElement;
  root.style.setProperty('--bg', colors.bg);
  root.style.setProperty('--fg', colors.fg);
  root.style.setProperty('--muted', colors.muted);
  root.style.setProperty('--border', colors.border);
  root.style.setProperty('--card-bg', colors.card);
  root.style.setProperty('--card-border', colors.border);
  root.style.setProperty('--toggle-bg', colors.card);
  root.style.setProperty('--toggle-border', colors.fg);
  root.style.setProperty('--toggle-icon', colors.fg);
  root.style.setProperty('--accent', colors.accent);
}

function applyTextOutline() {
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    if (textOutline) {
      heroTitle.classList.add('text-outline');
    } else {
      heroTitle.classList.remove('text-outline');
    }
  }
}

function updateThemeOptions() {
  document.querySelectorAll('.theme-option').forEach(sw => {
    sw.classList.toggle('active', sw.dataset.theme === currentTheme);
  });
}

function setupDeviceListener() {
  if (mql) mql.removeEventListener('change', onDeviceThemeChange);
  mql = window.matchMedia('(prefers-color-scheme: dark)');
  mql.addEventListener('change', onDeviceThemeChange);
}

function onDeviceThemeChange() {
  if (followDevice && currentTheme === 'auto') {
    applyTheme('auto');
  }
}

function setFollowDevice(enabled) {
  followDevice = enabled;
  if (enabled) {
    currentTheme = 'auto';
    applyTheme('auto');
    setupDeviceListener();
  } else {
    if (currentTheme === 'auto') {
      currentTheme = 'light';
      applyTheme('light');
    }
  }
  updateToggleSwitch();
}

function updateToggleSwitch() {
  const toggle = document.getElementById('followDeviceToggle');
  if (toggle) toggle.classList.toggle('active', followDevice);
  const reduceToggle = document.getElementById('reduceMotionToggle');
  if (reduceToggle) reduceToggle.classList.toggle('active', reduceMotion);
  const outlineToggle = document.getElementById('textOutlineToggle');
  if (outlineToggle) outlineToggle.classList.toggle('active', textOutline);
}

function setReduceMotion(enabled) {
  reduceMotion = enabled;
  if (enabled) {
    document.body.classList.add('reduce-motion');
  } else {
    document.body.classList.remove('reduce-motion');
  }
  updateToggleSwitch();
}

function setTextOutline(enabled) {
  textOutline = enabled;
  applyTextOutline();
  updateToggleSwitch();
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : (lang === 'zh-CN' ? 'zh-CN' : (lang === 'yue' ? 'yue' : (lang === 'ja' ? 'ja' : (lang === 'ko' ? 'ko' : 'zh-TW'))));

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  document.getElementById('langToggle').textContent = langLabels[lang] || 'TW';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key] !== undefined) {
      el.innerHTML = I18N[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (I18N[lang][key] !== undefined) {
      el.placeholder = I18N[lang][key];
    }
  });

  renderMenuGrid();
  renderCustomSelect();
  renderStats();
  renderLog();
  renderAnnouncement();

  const trigger = document.getElementById('mealTrigger');
  if (!selectedMealId) {
    trigger.textContent = t('meal_placeholder');
  }

  if (document.getElementById('settingsModal').classList.contains('show')) {
    renderSettingsModal();
  }

  if (document.getElementById('adminModal').classList.contains('show')) {
    renderAdminTab();
  }

  closeLangDropdown();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 120;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
  el.classList.remove('highlight-flash');
  void el.offsetWidth;
  el.classList.add('highlight-flash');
  setTimeout(() => el.classList.remove('highlight-flash'), 1500);
}

function renderUpdateModal() {
  const content = document.getElementById('updateModalContent');
  content.innerHTML = `
    <div class="modal-section-title">${t('update_title_v15')}</div>
    <ul>
      <li>${t('update_v15_1')}</li>
      <li>${t('update_v15_2')}</li>
      <li>${t('update_v15_3')}</li>
      <li>${t('update_v15_4')}</li>
      <li>${t('update_v15_5')}</li>
      <li>${t('update_v15_6')}</li>
      <li>${t('update_v15_7')}</li>
    </ul>
    <hr class="modal-divider">
    <div class="modal-section-title">${t('update_title_v14fix')}</div>
    <ul><li>${t('update_v14fix_1')}</li></ul>
    <hr class="modal-divider">
    <div class="modal-section-title">${t('update_title_v14')}</div>
    <ul><li>${t('update_v14_1')}</li><li>${t('update_v14_2')}</li><li>${t('update_v14_3')}</li></ul>
    <hr class="modal-divider">
    <div class="modal-section-title">${t('update_title_v135')}</div>
    <ul><li>${t('update_v135_1')}</li><li>${t('update_v135_2')}</li><li>${t('update_v135_3')}</li><li>${t('update_v135_4')}</li></ul>
    <hr class="modal-divider">
    <div class="modal-section-title">${t('update_title_v13')}</div>
    <ul><li>${t('update_v13_1')}</li><li>${t('update_v13_2')}</li><li>${t('update_v13_3')}</li></ul>
    <hr class="modal-divider">
    <div class="modal-section-title">${t('update_title_v12')}</div>
    <ul><li>${t('update_v12_1')}</li><li>${t('update_v12_2')}</li><li>${t('update_v12_3')}</li></ul>
    <hr class="modal-divider">
    <div class="modal-section-title">${t('update_title_v111')}</div>
    <ul><li><strong>FIXES：</strong>${t('update_v111_fixes')}</li></ul>
    <hr class="modal-divider">
    <div class="modal-section-title">${t('update_title_v11')}</div>
    <ul><li><strong>NEW：</strong>${t('update_v11_new')}</li><li><strong>FIXES：</strong>${t('update_v11_fixes')}</li></ul>
  `;
}

function renderHelpModal() {
  const content = document.getElementById('helpModalContent');
  content.innerHTML = `
    <h2>${t('help_title')}</h2>
    <div class="modal-section-title">${t('help_intro_title')}</div>
    <p>${t('help_intro_text')}</p>
    <div class="modal-section-title">${t('help_features_title')}</div>
    <ul>
      <li>${t('help_feature_1')}</li><li>${t('help_feature_2')}</li><li>${t('help_feature_3')}</li>
      <li>${t('help_feature_4')}</li><li>${t('help_feature_5')}</li><li>${t('help_feature_6')}</li>
    </ul>
    <div class="modal-section-title">${t('help_steps_title')}</div>
    <div class="help-step"><div class="help-step-num">1</div><div class="help-step-content"><strong>${t('help_step_1_title')}</strong><span>${t('help_step_1_text')}</span></div></div>
    <div class="help-step"><div class="help-step-num">2</div><div class="help-step-content"><strong>${t('help_step_2_title')}</strong><span>${t('help_step_2_text')}</span></div></div>
    <div class="help-step"><div class="help-step-num">3</div><div class="help-step-content"><strong>${t('help_step_3_title')}</strong><span>${t('help_step_3_text')}</span></div></div>
    <div class="help-step"><div class="help-step-num">4</div><div class="help-step-content"><strong>${t('help_step_4_title')}</strong><span>${t('help_step_4_text')}</span></div></div>
    <div class="modal-section-title">${t('help_notes_title')}</div>
    <ul><li>${t('help_note_1')}</li><li>${t('help_note_2')}</li><li>${t('help_note_3')}</li><li>${t('help_note_4')}</li></ul>
  `;
}

function renderSettingsModal() {
  const content = document.getElementById('settingsContent');
  const minSize = FONT_SIZES[0];
  const maxSize = FONT_SIZES[FONT_SIZES.length - 1];
  const percent = ((currentFontSize - minSize) / (maxSize - minSize)) * 100;

  let ticksHtml = FONT_SIZES.map(size => {
    const pos = ((size - minSize) / (maxSize - minSize)) * 100;
    const isActive = size === currentFontSize;
    return `<div class="slider-tick ${isActive ? 'active' : ''}" style="left: ${pos}%;"><span>${size}px</span></div>`;
  }).join('');

  const themeLabels = {
    'light': t('theme_light'),
    'dark-gray': t('theme_dark_gray'),
    'dark': t('theme_dark'),
    'blue': t('theme_blue'),
    'auto': t('theme_auto'),
    'custom': t('theme_custom')
  };

  const colorKeys = ['bg', 'fg', 'muted', 'border', 'card', 'accent'];
  const colorLabels = {
    bg: t('custom_color_bg'),
    fg: t('custom_color_fg'),
    muted: t('custom_color_muted'),
    border: t('custom_color_border'),
    card: t('custom_color_card'),
    accent: t('custom_color_accent')
  };

  let colorRowsHtml = colorKeys.map(key => `
    <div class="color-row">
      <span class="color-row-label">${colorLabels[key]}</span>
      <div class="color-row-inputs">
        <input type="color" class="color-input" id="custom${key.charAt(0).toUpperCase() + key.slice(1)}" value="${customColors[key]}">
        <input type="text" class="color-hex-input" id="custom${key.charAt(0).toUpperCase() + key.slice(1)}Hex" value="${customColors[key]}" maxlength="7">
      </div>
      <div class="rgb-toggle-row">
        <span class="rgb-toggle-label">RGB</span>
        <div class="rgb-toggle-switch ${rgbEnabled[key] ? 'active' : ''}" id="rgbToggle${key.charAt(0).toUpperCase() + key.slice(1)}" onclick="toggleRgb('${key}')"></div>
      </div>
    </div>
  `).join('');

  content.innerHTML = `
    <div class="settings-container">
      <div class="settings-card">
        <div class="settings-card-header">
          <div class="settings-card-icon">🎨</div>
          <div><div class="settings-card-title">${t('setting_appearance')}</div><div class="settings-card-desc">${t('setting_appearance_desc')}</div></div>
        </div>
        <div class="settings-card-body">
          <div class="toggle-row">
            <span class="toggle-label">${t('toggle_device_theme')}</span>
            <div class="toggle-switch ${followDevice ? 'active' : ''}" id="followDeviceToggle" onclick="setFollowDevice(!followDevice)"></div>
          </div>
          <div class="theme-grid">
            <div class="theme-option light ${currentTheme === 'light' ? 'active' : ''}" data-theme="light" onclick="selectTheme('light')" title="${themeLabels['light']}"></div>
            <div class="theme-option dark-gray ${currentTheme === 'dark-gray' ? 'active' : ''}" data-theme="dark-gray" onclick="selectTheme('dark-gray')" title="${themeLabels['dark-gray']}"></div>
            <div class="theme-option dark ${currentTheme === 'dark' ? 'active' : ''}" data-theme="dark" onclick="selectTheme('dark')" title="${themeLabels['dark']}"></div>
            <div class="theme-option blue ${currentTheme === 'blue' ? 'active' : ''}" data-theme="blue" onclick="selectTheme('blue')" title="${themeLabels['blue']}"></div>
            <div class="theme-option auto ${currentTheme === 'auto' ? 'active' : ''}" data-theme="auto" onclick="selectTheme('auto')" title="${themeLabels['auto']}">
              <svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><path d="M3 12h18" stroke-dasharray="2 2"/></svg>
            </div>
            <div class="theme-option custom ${currentTheme === 'custom' ? 'active' : ''}" data-theme="custom" onclick="selectTheme('custom')" title="${themeLabels['custom']}">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
          </div>
          <div class="custom-color-panel ${currentTheme === 'custom' ? 'show' : ''}" id="customColorPanel">
            <div class="custom-color-panel-title">${t('custom_colors_title')}</div>
            ${colorRowsHtml}
            <div class="color-actions">
              <button class="btn btn-success" onclick="applyCustomColorsFromInputs()"><span>${t('custom_apply')}</span></button>
              <button class="btn btn-outline" onclick="resetCustomColors()"><span>${t('custom_reset')}</span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="settings-card">
        <div class="settings-card-header">
          <div class="settings-card-icon">♿</div>
          <div><div class="settings-card-title">${t('setting_accessibility')}</div><div class="settings-card-desc">${t('setting_accessibility_desc')}</div></div>
        </div>
        <div class="settings-card-body">
          <div class="toggle-row">
            <span class="toggle-label">${t('toggle_reduce_motion')}</span>
            <div class="toggle-switch ${reduceMotion ? 'active' : ''}" id="reduceMotionToggle" onclick="setReduceMotion(!reduceMotion)"></div>
          </div>
        </div>
      </div>
      <div class="settings-card">
        <div class="settings-card-header">
          <div class="settings-card-icon">T</div>
          <div><div class="settings-card-title">${t('setting_text_outline')}</div><div class="settings-card-desc">${t('setting_text_outline_desc')}</div></div>
        </div>
        <div class="settings-card-body">
          <div class="toggle-row">
            <span class="toggle-label">${t('setting_text_outline')}</span>
            <div class="toggle-switch ${textOutline ? 'active' : ''}" id="textOutlineToggle" onclick="setTextOutline(!textOutline)"></div>
          </div>
        </div>
      </div>
      <div class="settings-card">
        <div class="settings-card-header">
          <div class="settings-card-icon">abc</div>
          <div><div class="settings-card-title">${t('setting_display')}</div><div class="settings-card-desc">${t('setting_display_desc')}</div></div>
        </div>
        <div class="settings-card-body">
          <div class="slider-wrapper">
            <div class="slider-header">
              <span class="slider-label">${t('slider_font_size')}</span>
              <span class="slider-value" id="fontSizeValue">${currentFontSize}px</span>
            </div>
            <div class="slider-track-container">
              <div class="slider-track"><div class="slider-fill" id="sliderFill" style="width: ${percent}%;"></div></div>
              <input type="range" id="fontSizeSlider" min="${minSize}" max="${maxSize}" value="${currentFontSize}" step="1">
            </div>
            <div class="slider-ticks" id="sliderTicks">${ticksHtml}</div>
          </div>
          <div class="preview-box">
            <div class="preview-label">${t('preview_label')}</div>
            <div class="preview-content" id="previewContent" style="font-size: ${currentFontSize}px;">${t('preview_text')}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const slider = document.getElementById('fontSizeSlider');
  const fill = document.getElementById('sliderFill');
  const valueDisplay = document.getElementById('fontSizeValue');
  const previewContent = document.getElementById('previewContent');
  const ticksContainer = document.getElementById('sliderTicks');

  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    currentFontSize = val;
    const newPercent = ((val - minSize) / (maxSize - minSize)) * 100;
    fill.style.width = newPercent + '%';
    valueDisplay.textContent = val + 'px';
    previewContent.style.fontSize = val + 'px';
    document.documentElement.style.setProperty('--base-font-size', val + 'px');
    ticksContainer.querySelectorAll('.slider-tick').forEach(tick => {
      const tickSize = parseInt(tick.querySelector('span').textContent);
      tick.classList.toggle('active', tickSize === val);
    });
  });

  if (currentTheme === 'custom') {
    setupColorSync('customBg', 'customBgHex');
    setupColorSync('customFg', 'customFgHex');
    setupColorSync('customMuted', 'customMutedHex');
    setupColorSync('customBorder', 'customBorderHex');
    setupColorSync('customCard', 'customCardHex');
    setupColorSync('customAccent', 'customAccentHex');
  }
}

function setupColorSync(colorId, hexId) {
  const colorInput = document.getElementById(colorId);
  const hexInput = document.getElementById(hexId);
  if (!colorInput || !hexInput) return;

  colorInput.addEventListener('input', (e) => {
    hexInput.value = e.target.value;
  });

  hexInput.addEventListener('change', (e) => {
    let val = e.target.value.trim();
    if (!val.startsWith('#')) val = '#' + val;
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      colorInput.value = val;
    }
  });
}

function applyCustomColorsFromInputs() {
  const bg = document.getElementById('customBg').value;
  const fg = document.getElementById('customFg').value;
  const muted = document.getElementById('customMuted').value;
  const border = document.getElementById('customBorder').value;
  const card = document.getElementById('customCard').value;
  const accent = document.getElementById('customAccent').value;

  customColors = { bg, fg, muted, border, card, accent };
  applyCustomColors(customColors);
  showToast(t('custom_saved'));
}

function resetCustomColors() {
  customColors = { ...defaultColors.light };
  rgbEnabled = { bg: false, fg: false, muted: false, border: false, card: false, accent: false };
  stopRgbAnimation();
  applyCustomColors(customColors);
  if (document.getElementById('customBg')) {
    document.getElementById('customBg').value = customColors.bg;
    document.getElementById('customBgHex').value = customColors.bg;
    document.getElementById('customFg').value = customColors.fg;
    document.getElementById('customFgHex').value = customColors.fg;
    document.getElementById('customMuted').value = customColors.muted;
    document.getElementById('customMutedHex').value = customColors.muted;
    document.getElementById('customBorder').value = customColors.border;
    document.getElementById('customBorderHex').value = customColors.border;
    document.getElementById('customCard').value = customColors.card;
    document.getElementById('customCardHex').value = customColors.card;
    document.getElementById('customAccent').value = customColors.accent;
    document.getElementById('customAccentHex').value = customColors.accent;
    updateRgbToggles();
  }
  showToast(t('custom_saved'));
}

function toggleRgb(key) {
  rgbEnabled[key] = !rgbEnabled[key];
  const toggle = document.getElementById(`rgbToggle${key.charAt(0).toUpperCase() + key.slice(1)}`);
  if (toggle) toggle.classList.toggle('active', rgbEnabled[key]);
  const anyEnabled = Object.values(rgbEnabled).some(v => v);
  if (anyEnabled && !rgbAnimationId) {
    startRgbAnimation();
  } else if (!anyEnabled && rgbAnimationId) {
    stopRgbAnimation();
  }
}

function selectTheme(theme) {
  if (followDevice) { followDevice = false; }
  applyTheme(theme);
  updateToggleSwitch();
}

function toggleLangDropdown() {
  document.getElementById('langDropdown').classList.toggle('open');
}

function closeLangDropdown() {
  document.getElementById('langDropdown').classList.remove('open');
}

document.getElementById('langToggle').addEventListener('click', (e) => {
  e.stopPropagation();
  toggleLangDropdown();
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('#langToggle') && !e.target.closest('#langDropdown')) {
    closeLangDropdown();
  }
});

function openUpdateModal() { renderUpdateModal(); document.getElementById('updateModal').classList.add('show'); }
function closeUpdateModal() { document.getElementById('updateModal').classList.remove('show'); }
function openHelpModal() { renderHelpModal(); document.getElementById('helpModal').classList.add('show'); }
function closeHelpModal() { document.getElementById('helpModal').classList.remove('show'); }
function openSettingsModal() { renderSettingsModal(); document.getElementById('settingsModal').classList.add('show'); }
function closeSettingsModal() { document.getElementById('settingsModal').classList.remove('show'); }

function requestAdminAccess() {
  document.getElementById('passwordInput').value = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('passwordModal').classList.add('show');
  setTimeout(() => { document.getElementById('passwordInput').focus(); }, 100);
}

function closePasswordModal() {
  document.getElementById('passwordModal').classList.remove('show');
}

function verifyPassword() {
  const input = document.getElementById('passwordInput');
  const errorMsg = document.getElementById('passwordError');
  const password = input.value;

  if (password === ADMIN_PASSWORD) {
    closePasswordModal();
    showToast('✓ Admin access granted');
    setTimeout(() => {
      adminCurrentTab = 'dashboard';
      renderAdminTab();
      document.getElementById('adminModal').classList.add('show');
    }, 400);
  } else {
    errorMsg.textContent = 'Wrong password, please try again';
    input.classList.add('error');
    input.value = '';
    input.focus();
    setTimeout(() => { input.classList.remove('error'); }, 400);
  }
}

document.getElementById('passwordInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { verifyPassword(); }
});

function closeAdminModal() {
  document.getElementById('adminModal').classList.remove('show');
}

function switchAdminTab(tab) {
  adminCurrentTab = tab;
  renderAdminTab();
}

function renderAdminTab() {
  const content = document.getElementById('adminTabContent');
  const tabs = document.getElementById('adminTabs');

  tabs.innerHTML = `
    <button class="admin-tab ${adminCurrentTab === 'dashboard' ? 'active' : ''}" onclick="switchAdminTab('dashboard')">${t('admin_tab_dashboard')}</button>
    <button class="admin-tab ${adminCurrentTab === 'announcements' ? 'active' : ''}" onclick="switchAdminTab('announcements')">${t('admin_tab_announcements')}</button>
    <button class="admin-tab ${adminCurrentTab === 'orders' ? 'active' : ''}" onclick="switchAdminTab('orders')">${t('admin_tab_orders')}</button>
    <button class="admin-tab ${adminCurrentTab === 'menu' ? 'active' : ''}" onclick="switchAdminTab('menu')">${t('admin_tab_menu')}</button>
    <button class="admin-tab ${adminCurrentTab === 'stats' ? 'active' : ''}" onclick="switchAdminTab('stats')">${t('admin_tab_stats')}</button>
    <button class="admin-tab ${adminCurrentTab === 'data' ? 'active' : ''}" onclick="switchAdminTab('data')">${t('admin_tab_data')}</button>
  `;

  if (adminCurrentTab === 'dashboard') {
    renderAdminDashboard(content);
  } else if (adminCurrentTab === 'announcements') {
    renderAdminAnnouncements(content);
  } else if (adminCurrentTab === 'orders') {
    renderAdminOrders(content);
  } else if (adminCurrentTab === 'menu') {
    renderAdminMenu(content);
  } else if (adminCurrentTab === 'stats') {
    renderAdminStats(content);
  } else if (adminCurrentTab === 'data') {
    renderAdminData(content);
  }
}

function renderAdminDashboard(content) {
  const totalOrders = orders.length;
  const totalAmount = orders.reduce((s, o) => s + o.price, 0);
  const avgOrder = totalOrders > 0 ? Math.round(totalAmount / totalOrders) : 0;
  const activeMenu = MENU.filter(m => m.available).length;

  const recentOrders = orders.slice(-5).reverse();

  content.innerHTML = `
    <div class="admin-stat-grid">
      <div class="admin-stat-card">
        <div class="admin-stat-value">${totalOrders}</div>
        <div class="admin-stat-label">${t('admin_dashboard_total_orders')}</div>
      </div>
      <div class="admin-stat-card">
        <div class="admin-stat-value">$${totalAmount}</div>
        <div class="admin-stat-label">${t('admin_dashboard_total_revenue')}</div>
      </div>
      <div class="admin-stat-card">
        <div class="admin-stat-value">$${avgOrder}</div>
        <div class="admin-stat-label">${t('admin_dashboard_avg_order')}</div>
      </div>
      <div class="admin-stat-card">
        <div class="admin-stat-value">${activeMenu}/${MENU.length}</div>
        <div class="admin-stat-label">${t('admin_dashboard_active_menu')}</div>
      </div>
    </div>
    <div class="admin-section-title">${t('admin_dashboard_recent_orders')}</div>
    ${recentOrders.length === 0 ? `<div class="admin-empty">${t('admin_dashboard_no_orders')}</div>` : `
      <table class="admin-table">
        <thead><tr><th>#</th><th>${t('print_seat')}</th><th>${t('print_meal')}</th><th>${t('print_price')}</th></tr></thead>
        <tbody>
          ${recentOrders.map((o, i) => `<tr><td>${orders.length - i}</td><td>${o.seat}</td><td>${esc(mealName(o))}</td><td>$${o.price}</td></tr>`).join('')}
        </tbody>
      </table>
    `}
  `;
}

function renderAdminAnnouncements(content) {
  content.innerHTML = `
    <div class="admin-section-title">${t('admin_announce_create')}</div>
    <div class="admin-form-row">
      <textarea id="newAnnounceText" placeholder="${t('admin_announce_placeholder')}"></textarea>
    </div>
    <div class="admin-form-row">
      <button class="btn btn-primary" onclick="createAnnouncement()" style="flex:1"><span>${t('admin_announce_create_btn')}</span></button>
    </div>
    <div class="admin-section-title">${t('admin_announce_title')}</div>
    ${announcements.length === 0 ? `<div class="admin-empty">${t('admin_announce_no_announce')}</div>` : `
      <ul class="admin-list">
        ${announcements.map((a, i) => `
          <li class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${a.text}</div>
              <div class="admin-list-item-desc">${a.date}</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn-small danger" onclick="deleteAnnouncement(${i})">${t('admin_announce_delete')}</button>
            </div>
          </li>
        `).join('')}
      </ul>
    `}
  `;
}

function createAnnouncement() {
  const text = document.getElementById('newAnnounceText').value.trim();
  if (!text) return;
  announcements.unshift({ text, date: new Date().toLocaleString() });
  showToast(t('admin_announce_created'));
  renderAnnouncement();
  renderAdminTab();
}

function deleteAnnouncement(index) {
  announcements.splice(index, 1);
  showToast(t('admin_announce_deleted'));
  renderAnnouncement();
  renderAdminTab();
}

function renderAnnouncement() {
  const banner = document.getElementById('announcementBanner');
  const text = document.getElementById('announcementText');
  if (announcements.length > 0) {
    banner.classList.remove('hidden');
    text.textContent = announcements[0].text;
  } else {
    banner.classList.add('hidden');
  }
}

function closeAnnouncement() {
  document.getElementById('announcementBanner').classList.add('hidden');
}

function renderAdminOrders(content) {
  content.innerHTML = `
    <div class="admin-section-title">${t('admin_order_title')}</div>
    ${orders.length === 0 ? `<div class="admin-empty">${t('admin_order_no_orders')}</div>` : `
      <table class="admin-table">
        <thead><tr><th>#</th><th>${t('print_seat')}</th><th>${t('print_meal')}</th><th>${t('print_price')}</th><th></th></tr></thead>
        <tbody>
          ${orders.map((o, i) => `<tr><td>${i + 1}</td><td>${o.seat}</td><td>${esc(mealName(o))}</td><td>$${o.price}</td><td><button class="admin-btn-small danger" onclick="deleteOrderAdmin(${i})">${t('admin_order_delete')}</button></td></tr>`).join('')}
        </tbody>
      </table>
      <div class="admin-actions-bar">
        <button class="btn btn-outline" onclick="exportCSV(event)"><span>${t('admin_order_export')}</span></button>
        <button class="btn btn-danger" onclick="confirmClearAllAdmin()"><span>${t('admin_order_clear_all')}</span></button>
      </div>
    `}
  `;
}

function deleteOrderAdmin(index) {
  orders.splice(index, 1);
  renderStats();
  renderLog();
  renderAdminTab();
  showToast(t('admin_order_deleted'));
}

function confirmClearAllAdmin() {
  showConfirmDialog(t('confirm_title'), t('admin_data_reset_confirm'), () => {
    orders = [];
    renderStats();
    renderLog();
    renderAdminTab();
    showToast(t('admin_order_cleared'));
  });
}

function renderAdminStats(content) {
  const counts = {};
  MENU.forEach(m => counts[m.id] = 0);
  orders.forEach(o => counts[o.mealId]++);

  const totalOrders = orders.length;
  const totalAmount = orders.reduce((s, o) => s + o.price, 0);

  content.innerHTML = `
    <div class="admin-section-title">${t('admin_stats_title')}</div>
    ${orders.length === 0 ? `<div class="admin-empty">${t('admin_stats_empty')}</div>` : `
      <table class="admin-table">
        <thead>
          <tr>
            <th>${t('th_meal')}</th>
            <th>${t('th_price')}</th>
            <th>${t('th_qty')}</th>
            <th>${t('th_subtotal')}</th>
          </tr>
        </thead>
        <tbody>
          ${MENU.map(m => `
            <tr>
              <td>${esc(mealName(m))}</td>
              <td>$${m.price}</td>
              <td>${counts[m.id]}</td>
              <td>$${counts[m.id] * m.price}</td>
            </tr>
          `).join('')}
          <tr style="border-top: 2px solid rgba(255,255,255,0.3);">
            <td><strong>${t('summary_orders_label')}</strong></td>
            <td></td>
            <td><strong>${totalOrders}</strong></td>
            <td><strong>$${totalAmount}</strong></td>
          </tr>
        </tbody>
      </table>
      <div class="admin-actions-bar">
        <button class="btn btn-outline" onclick="exportCSV(event)"><span>${t('admin_stats_export_csv')}</span></button>
        <button class="btn btn-outline" onclick="printOrders()"><span>${t('admin_stats_print')}</span></button>
        <button class="btn btn-danger" onclick="confirmClearAllAdmin()"><span>${t('admin_stats_clear')}</span></button>
      </div>
    `}
  `;
}

function renderAdminMenu(content) {
  content.innerHTML = `
    <div class="menu-add-form">
      <div class="menu-add-form-title">${t('admin_menu_add_title')}</div>
      <div class="menu-add-form-row">
        <input type="text" id="newMenuName" placeholder="${t('admin_menu_add_name_placeholder')}">
        <input type="number" id="newMenuPrice" placeholder="${t('admin_menu_add_price_placeholder')}" min="0">
        <button class="btn btn-success" onclick="addMenuItem()"><span>${t('admin_menu_add_btn')}</span></button>
      </div>
    </div>
    <div class="admin-section-title">${t('admin_menu_title')}</div>
    <ul class="admin-list">
      ${MENU.map((m, i) => `
        <li class="admin-list-item">
          <div class="admin-list-item-info">
            <div class="admin-list-item-title">${esc(mealName(m))}</div>
            <div class="admin-list-item-desc"><span class="admin-badge ${m.available ? 'active' : 'inactive'}">${m.available ? t('admin_menu_status_active') : t('admin_menu_status_inactive')}</span></div>
          </div>
          <div class="admin-list-item-actions">
            <input type="number" value="${m.price}" id="menuPrice_${m.id}" style="width:80px;padding:6px 8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);border-radius:6px;color:#fff;font-size:0.85rem;">
            <button class="admin-btn-small" onclick="toggleMenuAvailability(${i})">${t('admin_menu_toggle')}</button>
            <button class="admin-btn-small success" onclick="saveMenuPrice(${m.id})">${t('admin_menu_save')}</button>
            <button class="admin-btn-small danger" onclick="deleteMenuItem(${i})">🗑️</button>
          </div>
        </li>
      `).join('')}
    </ul>
  `;
}

function addMenuItem() {
  const nameInput = document.getElementById('newMenuName');
  const priceInput = document.getElementById('newMenuPrice');
  const name = nameInput.value.trim();
  const price = parseInt(priceInput.value);

  if (!name) {
    showToast(' Please enter a menu name');
    return;
  }
  if (isNaN(price) || price < 0) {
    showToast('⚠ Please enter a valid price');
    return;
  }

  MENU.push({
    id: nextMenuId++,
    name: {
      zh: name,
      'zh-CN': name,
      yue: name,
      ja: name,
      en: name,
      ko: name
    },
    price: price,
    available: true
  });

  nameInput.value = '';
  priceInput.value = '';

  renderMenuGrid();
  renderCustomSelect();
  renderAdminTab();
  showToast(t('admin_menu_add_success', { name }));
}

function deleteMenuItem(index) {
  const item = MENU[index];
  showConfirmDialog(t('confirm_title'), t('admin_menu_delete_confirm', { name: item.name[currentLang] }), () => {
    MENU.splice(index, 1);
    renderMenuGrid();
    renderCustomSelect();
    renderAdminTab();
    showToast(t('admin_menu_delete_success', { name: item.name[currentLang] }));
  });
}

function toggleMenuAvailability(index) {
  MENU[index].available = !MENU[index].available;
  renderAdminTab();
  renderMenuGrid();
  renderCustomSelect();
  showToast(t('admin_menu_updated'));
}

function saveMenuPrice(id) {
  const input = document.getElementById(`menuPrice_${id}`);
  const newPrice = parseInt(input.value);
  if (isNaN(newPrice) || newPrice < 0) {
    showToast('⚠ Please enter a valid price');
    return;
  }
  const menu = MENU.find(m => m.id === id);
  if (menu) {
    menu.price = newPrice;
    renderStats();
    renderMenuGrid();
    renderAdminTab();
    showToast(t('admin_menu_save_success', { name: menu.name[currentLang], price: newPrice }));
  }
}

function renderAdminData(content) {
  content.innerHTML = `
    <div class="admin-section-title">${t('admin_data_title')}</div>
    <div class="admin-actions-bar">
      <button class="btn btn-outline" onclick="exportJSON(event)"><span>${t('admin_data_export_json')}</span></button>
      <button class="btn btn-outline" onclick="exportCSV(event)"><span>${t('admin_data_export_csv')}</span></button>
    </div>
    <div class="admin-form-row" style="margin-top:16px;">
      <input type="file" id="adminImportFile" accept=".json" style="flex:1;">
      <button class="btn btn-outline" onclick="adminImportData()"><span>${t('admin_data_import')}</span></button>
    </div>
    <div class="admin-actions-bar" style="margin-top:16px;">
      <button class="btn btn-danger" onclick="confirmResetAll()"><span>${t('admin_data_reset')}</span></button>
    </div>
  `;
}

function adminImportData() {
  const input = document.getElementById('adminImportFile');
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.orders) {
        orders = data.orders;
        if (data.announcements) announcements = data.announcements;
        if (data.menu) {
          MENU.length = 0;
          data.menu.forEach(m => MENU.push(m));
          nextMenuId = Math.max(...MENU.map(m => m.id)) + 1;
        }
        renderStats();
        renderLog();
        renderAnnouncement();
        renderAdminTab();
        renderMenuGrid();
        renderCustomSelect();
        showToast(t('admin_data_import_success'));
      } else {
        showToast(t('toast_invalid_format'));
      }
    } catch (err) {
      showToast(t('toast_invalid_format'));
    }
  };
  reader.readAsText(file);
  input.value = '';
}

function confirmResetAll() {
  showConfirmDialog(t('confirm_title'), t('admin_data_reset_confirm'), () => {
    orders = [];
    announcements = [];
    renderStats();
    renderLog();
    renderAnnouncement();
    renderAdminTab();
    showToast(t('admin_data_reset_success'));
  });
}

function showConfirmDialog(title, message, onConfirm) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMessage').textContent = message;
  document.getElementById('confirmOkBtn').onclick = () => {
    closeConfirm();
    onConfirm();
  };
  document.getElementById('confirmOverlay').classList.add('show');
}

function closeConfirm() {
  document.getElementById('confirmOverlay').classList.remove('show');
}

document.getElementById('updateModal').addEventListener('click', (e) => { if (e.target.id === 'updateModal') closeUpdateModal(); });
document.getElementById('helpModal').addEventListener('click', (e) => { if (e.target.id === 'helpModal') closeHelpModal(); });
document.getElementById('settingsModal').addEventListener('click', (e) => { if (e.target.id === 'settingsModal') closeSettingsModal(); });
document.getElementById('adminModal').addEventListener('click', (e) => { if (e.target.id === 'adminModal') closeAdminModal(); });
document.getElementById('passwordModal').addEventListener('click', (e) => { if (e.target.id === 'passwordModal') closePasswordModal(); });
document.getElementById('confirmOverlay').addEventListener('click', (e) => { if (e.target.id === 'confirmOverlay') closeConfirm(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeUpdateModal(); closeHelpModal(); closeSettingsModal();
    closeAdminModal(); closePasswordModal(); closeConfirm();
  }
});

function init() {
  renderMenuGrid();
  renderCustomSelect();
  renderStats();
  renderAnnouncement();
  applyTheme('light');
  applyTextOutline();
}

function renderMenuGrid() {
  const container = document.getElementById('menuGrid');
  const availableMenu = MENU.filter(m => m.available);
  container.innerHTML = availableMenu.map((m, i) =>
    `<div class="menu-item">
      <div><div class="num">0${i + 1}</div><div class="name">${esc(mealName(m))}</div></div>
      <div class="price">$${m.price}</div>
    </div>`
  ).join('');
  document.getElementById('heroMenuCount').textContent = availableMenu.length;
}

function renderCustomSelect() {
  const dropdown = document.getElementById('mealDropdown');
  let html = `<div class="custom-option placeholder" data-value="" onclick="selectMeal(this)">${t('meal_placeholder')}</div>`;
  MENU.filter(m => m.available).forEach(m => {
    html += `<div class="custom-option" data-value="${m.id}" onclick="selectMeal(this)"><span>${esc(mealName(m))}</span><span>$${m.price}</span></div>`;
  });
  dropdown.innerHTML = html;
}

function toggleDropdown() {
  const trigger = document.getElementById('mealTrigger');
  const dropdown = document.getElementById('mealDropdown');
  dropdownOpen = !dropdownOpen;
  if (dropdownOpen) { trigger.classList.add('active'); dropdown.classList.add('open'); }
  else { trigger.classList.remove('active'); dropdown.classList.remove('open'); }
}

function closeDropdown() {
  const trigger = document.getElementById('mealTrigger');
  const dropdown = document.getElementById('mealDropdown');
  dropdownOpen = false;
  trigger.classList.remove('active');
  dropdown.classList.remove('open');
}

function selectMeal(el) {
  const val = el.dataset.value;
  selectedMealId = val ? parseInt(val) : null;
  const name = val ? MENU.find(m => m.id === parseInt(val)).name[currentLang] : t('meal_placeholder');
  document.getElementById('mealTrigger').textContent = name;
  document.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
  if (val) el.classList.add('selected');
  closeDropdown();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function addOrder(e) {
  if (e) e.stopPropagation();
  const seat = parseInt(document.getElementById('seatInput').value);
  if (isNaN(seat) || seat < 1 || seat > 50) { showToast(t('toast_seat_invalid')); return; }
  if (!selectedMealId) { showToast(t('toast_meal_invalid')); return; }
  const meal = MENU.find(m => m.id === selectedMealId);
  if (!meal) { showToast(t('toast_meal_invalid')); return; }
  orders.push({ seat, mealId: meal.id, name: meal.name, price: meal.price, time: new Date().toLocaleTimeString('zh-TW', { hour12: false }) });
  document.getElementById('seatInput').value = '';
  document.getElementById('mealTrigger').textContent = t('meal_placeholder');
  selectedMealId = null;
  document.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
  renderStats(); renderLog();
  showToast(t('toast_order_success', { seat, meal: meal.name[currentLang] }));
}

function renderStats() {
  const tbody = document.getElementById('statsBody');
  const counts = {};
  MENU.forEach(m => counts[m.id] = 0);
  orders.forEach(o => counts[o.mealId]++);
  tbody.innerHTML = MENU.filter(m => m.available).map(m => {
    const count = counts[m.id];
    return `<tr><td>${esc(mealName(m))}</td><td>$${m.price}</td><td>${count}</td><td>$${count * m.price}</td></tr>`;
  }).join('');
  const total = orders.length;
  const amount = orders.reduce((s, o) => s + o.price, 0);
  document.getElementById('totalCount').innerHTML = `${total} <span data-i18n="unit_orders">${t('unit_orders')}</span>`;
  document.getElementById('totalAmount').textContent = `$${amount}`;
  document.getElementById('heroTotal').textContent = total;
  document.getElementById('heroAmount').textContent = `$${amount}`;
}

function renderLog() {
  const area = document.getElementById('logArea');
  if (orders.length === 0) { area.innerHTML = `<div class="empty">${t('log_empty')}</div>`; return; }
  area.innerHTML = orders.slice().reverse().map((o, idx) => {
    const realIndex = orders.length - 1 - idx;
    return `<div class="log-entry">
      <div class="meal-info"><span class="seat">${t('log_seat', { seat: o.seat })}</span> → ${esc(mealName(o))}</div>
      <div style="display:flex;align-items:center;gap:8px;"><span class="time">${o.time}</span><button class="delete-btn" onclick="deleteOrder(${realIndex})">✕</button></div>
    </div>`;
  }).join('');
}

function queryOrder(e) {
  if (e) e.stopPropagation();
  const seat = parseInt(document.getElementById('querySeat').value);
  const result = document.getElementById('queryResult');
  if (isNaN(seat) || seat < 1 || seat > 50) { result.innerHTML = `<div class="query-result" style="color:#ef4444;">${t('toast_query_invalid')}</div>`; return; }
  const found = orders.filter(o => o.seat === seat);
  if (found.length === 0) { result.innerHTML = `<div class="query-result">${t('query_no_record', { seat })}</div>`; }
  else {
    const total = found.reduce((s, o) => s + o.price, 0);
    result.innerHTML = `<div class="query-result"><strong>${t('query_title', { seat })}</strong><br>${found.map((o, i) => `${i + 1}. ${esc(mealName(o))} — $${o.price}`).join('<br>')}<br><br><strong>${t('query_subtotal', { total, count: found.length })}</strong></div>`;
  }
}

function exportJSON(e) {
  if (e) e.stopPropagation();
  if (orders.length === 0) { showToast(t('toast_no_export')); return; }
  const data = { exportDate: new Date().toISOString(), menu: MENU.map(m => ({ id: m.id, name: m.name, price: m.price, available: m.available })), orders: orders, announcements: announcements, summary: { totalOrders: orders.length, totalAmount: orders.reduce((s, o) => s + o.price, 0) } };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `lunch_order_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  showToast(t('toast_exported'));
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.orders && Array.isArray(data.orders)) {
        orders = data.orders;
        if (data.announcements) announcements = data.announcements;
        if (data.menu) {
          MENU.length = 0;
          data.menu.forEach(m => MENU.push(m));
          nextMenuId = Math.max(...MENU.map(m => m.id)) + 1;
        }
        renderStats(); renderLog(); renderAnnouncement(); renderMenuGrid(); renderCustomSelect();
        showToast(t('toast_imported', { count: orders.length }));
      } else { showToast(t('toast_invalid_format')); }
    } catch (err) { showToast(t('toast_read_failed')); }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function exportCSV(event) {
  if (event) event.stopPropagation();
  if (orders.length === 0) { showToast(t('stats_empty')); return; }
  const headers = ['#', t('print_seat'), t('print_meal'), t('print_price')];
  const rows = orders.map((o, i) => [i + 1, o.seat, o.name[currentLang], o.price]);
  const totalAmount = orders.reduce((s, o) => s + o.price, 0);
  rows.push(['', '', t('print_total'), totalAmount]);
  let csv = '\uFEFF' + headers.join(',') + '\n';
  rows.forEach(row => { csv += row.map(cell => `"${cell}"`).join(',') + '\n'; });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `lunch_orders_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  showToast(t('toast_csv_exported'));
}

function printOrders() {
  if (orders.length === 0) { showToast(t('stats_empty')); return; }
  const totalAmount = orders.reduce((s, o) => s + o.price, 0);
  const now = new Date().toLocaleString();
  let html = `<h1 style="text-align:center;margin-bottom:20px;">${t('print_title')}</h1><p style="text-align:center;color:#666;margin-bottom:20px;">${t('print_date')}: ${now}</p><table style="width:100%;border-collapse:collapse;"><thead><tr style="border-bottom:2px solid #000;"><th style="padding:8px;text-align:left;">#</th><th style="padding:8px;text-align:left;">${t('print_seat')}</th><th style="padding:8px;text-align:left;">${t('print_meal')}</th><th style="padding:8px;text-align:right;">${t('print_price')}</th></tr></thead><tbody>${orders.map((o, i) => `<tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">${i + 1}</td><td style="padding:8px;">${o.seat}</td><td style="padding:8px;">${esc(mealName(o))}</td><td style="padding:8px;text-align:right;">$${o.price}</td></tr>`).join('')}<tr style="border-top:2px solid #000;font-weight:bold;"><td colspan="3" style="padding:8px;text-align:right;">${t('print_total')}:</td><td style="padding:8px;text-align:right;">$${totalAmount}</td></tr></tbody></table>`;
  const printArea = document.getElementById('printArea');
  printArea.innerHTML = html;
  window.print();
}

document.getElementById('seatInput').addEventListener('keydown', e => { if (e.key === 'Enter') { if (!dropdownOpen) toggleDropdown(); } });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeDropdown(); closeLangDropdown(); } });
document.addEventListener('click', e => { if (!e.target.closest('.custom-select-wrapper') && dropdownOpen) { closeDropdown(); } });

// Initialization is handled by the refreshed interface.

// Interface refresh. All order data stays on this browser.
const UI_COPY = {
 zh:{admin:'管理後台',category:'餐點分類',all:'全部餐點',bento:'人氣便當',vegetarian:'蔬食選擇',rice:'經典飯食',soup:'暖心湯品',tools:'班級小工具',backup:'備份與匯出',local:'資料保存在此瀏覽器<br>記得定期匯出備份。',today:'今日菜單',sortDefault:'預設排序',sortLow:'價格：由低到高',sortHigh:'價格：由高到低',sortName:'餐點名稱',chooseHint:'點選餐點卡片，即可快速加入訂餐登記。',print:'列印報表',orderSubtitle:'好好吃飯，從這一份開始。',step1:'填寫座號',step2:'選擇餐點',step3:'完成',seat:'你的座號',seatPlaceholder:'輸入座號，例如 12',selectedLabel:'本次餐點',unselected:'尚未選擇',submit:'確認訂餐',instant:'送出後即時更新班級統計',needHelp:'第一次使用？',guide:'使用說明',queryHint:'今天訂了什麼？輸入座號查看。',backupHint:'保存班級訂單，交接也能輕鬆完成。',import:'匯入備份',updates:'更新紀錄',settings:'偏好設定',search:'搜尋餐點名稱、食材或類別…',results:'款餐點',noResults:'找不到符合的餐點',reset:'清除篩選',saved:'訂餐完成',saving:'登記中…',select:'選一份喜歡的午餐',empty:'還沒有訂單，從第一份午餐開始。',popular:'人氣',balanced:'營養均衡',plant:'植物好食',classic:'經典',warm:'熱湯',fresh:'每日供應',removed:'訂單已刪除',storageError:'瀏覽器無法保存資料，請匯出 JSON 備份。'},
 en:{admin:'Admin',category:'CATEGORIES',all:'All meals',bento:'Bento boxes',vegetarian:'Vegetarian',rice:'Rice bowls',soup:'Soups',tools:'CLASS TOOLS',backup:'Backup & export',local:'Saved in this browser.<br>Export a backup regularly.',today:"Today's menu",sortDefault:'Recommended',sortLow:'Price: low to high',sortHigh:'Price: high to low',sortName:'Meal name',chooseHint:'Choose a meal card to add it to your order.',print:'Print report',orderSubtitle:'A good day starts with a good lunch.',step1:'Your seat',step2:'Choose',step3:'Done',seat:'Seat number',seatPlaceholder:'Enter your seat, e.g. 12',selectedLabel:'YOUR MEAL',unselected:'No meal selected',submit:'Confirm order',instant:'Class totals update instantly',needHelp:'First time here?',guide:'How it works',queryHint:'Enter your seat to check your lunch.',backupHint:'Save and hand over your class orders.',import:'Import backup',updates:'Updates',settings:'Preferences',search:'Search meals, ingredients or categories…',results:'meals',noResults:'No meals found',reset:'Clear filters',saved:'Order confirmed',saving:'Saving…',select:'Choose your lunch',empty:'No orders yet. Make the first one.',popular:'Popular',balanced:'Balanced',plant:'Plant based',classic:'Classic',warm:'Warm soup',fresh:'Daily menu',removed:'Order deleted',storageError:'Storage is unavailable. Export a JSON backup.'},
 'zh-CN':{admin:'管理后台',category:'餐点分类',all:'全部餐点',bento:'人气便当',vegetarian:'蔬食选择',rice:'经典饭食',soup:'暖心汤品',tools:'班级小工具',backup:'备份与导出',local:'数据保存在此浏览器<br>记得定期导出备份。',today:'今日菜单',sortDefault:'默认排序',sortLow:'价格：从低到高',sortHigh:'价格：从高到低',sortName:'餐点名称',chooseHint:'点击餐点卡片，即可快速加入订餐登记。',print:'打印报表',orderSubtitle:'好好吃饭，从这一份开始。',step1:'填写座号',step2:'选择餐点',step3:'完成',seat:'你的座号',seatPlaceholder:'输入座号，例如 12',selectedLabel:'本次餐点',unselected:'尚未选择',submit:'确认订餐',instant:'提交后即时更新班级统计',needHelp:'第一次使用？',guide:'使用说明',queryHint:'今天订了什么？输入座号查看。',backupHint:'保存班级订单，交接也能轻松完成。',import:'导入备份',updates:'更新记录',settings:'偏好设置',search:'搜索餐点名称、食材或类别…',results:'款餐点',noResults:'找不到符合的餐点',reset:'清除筛选',saved:'订餐完成',saving:'登记中…',select:'选一份喜欢的午餐',empty:'还没有订单，从第一份午餐开始。',popular:'人气',balanced:'营养均衡',plant:'植物好食',classic:'经典',warm:'热汤',fresh:'每日供应',removed:'订单已删除',storageError:'浏览器无法保存数据，请导出 JSON 备份。'},
 ja:{admin:'管理',category:'カテゴリー',all:'すべて',bento:'お弁当',vegetarian:'ベジタリアン',rice:'ご飯もの',soup:'スープ',tools:'クラスツール',backup:'バックアップ',local:'このブラウザに保存されます。<br>定期的にバックアップしてください。',today:'今日のメニュー',sortDefault:'おすすめ順',sortLow:'価格が安い順',sortHigh:'価格が高い順',sortName:'名前順',chooseHint:'カードを選んで注文に追加します。',print:'印刷',orderSubtitle:'おいしいランチで、いい一日を。',step1:'出席番号',step2:'メニュー',step3:'完了',seat:'出席番号',seatPlaceholder:'出席番号（例：12）',selectedLabel:'選択したメニュー',unselected:'未選択',submit:'注文を確定',instant:'クラスの集計にすぐ反映されます',needHelp:'初めての方へ',guide:'使い方',queryHint:'出席番号で注文を確認。',backupHint:'クラスの注文を保存・引き継ぎ。',import:'読み込み',updates:'更新履歴',settings:'設定',search:'メニューや食材を検索…',results:'品',noResults:'該当するメニューがありません',reset:'条件をクリア',saved:'注文完了',saving:'登録中…',select:'ランチを選ぶ',empty:'まだ注文がありません。',popular:'人気',balanced:'バランス',plant:'植物性',classic:'定番',warm:'温かいスープ',fresh:'毎日提供',removed:'注文を削除しました',storageError:'保存できません。JSON を出力してください。'},
 ko:{admin:'관리',category:'메뉴 분류',all:'전체 메뉴',bento:'도시락',vegetarian:'채식',rice:'덮밥',soup:'국물 요리',tools:'학급 도구',backup:'백업 및 내보내기',local:'이 브라우저에 저장됩니다.<br>정기적으로 백업하세요.',today:'오늘의 메뉴',sortDefault:'기본 정렬',sortLow:'낮은 가격순',sortHigh:'높은 가격순',sortName:'이름순',chooseHint:'메뉴 카드를 눌러 주문에 추가하세요.',print:'인쇄',orderSubtitle:'든든한 점심으로 좋은 하루를.',step1:'번호 입력',step2:'메뉴 선택',step3:'완료',seat:'출석 번호',seatPlaceholder:'출석 번호 입력 (예: 12)',selectedLabel:'선택한 메뉴',unselected:'선택하지 않음',submit:'주문 확인',instant:'학급 통계가 즉시 업데이트됩니다',needHelp:'처음이신가요?',guide:'이용 안내',queryHint:'출석 번호로 주문을 확인하세요.',backupHint:'학급 주문을 저장하고 인계하세요.',import:'백업 가져오기',updates:'업데이트',settings:'설정',search:'메뉴, 재료 또는 분류 검색…',results:'개 메뉴',noResults:'메뉴를 찾을 수 없습니다',reset:'필터 초기화',saved:'주문 완료',saving:'저장 중…',select:'점심을 선택하세요',empty:'아직 주문이 없습니다.',popular:'인기',balanced:'균형 잡힌',plant:'채식',classic:'기본',warm:'따뜻한 국',fresh:'매일 제공',removed:'주문이 삭제되었습니다',storageError:'저장할 수 없습니다. JSON 백업을 내보내세요.'}
};
UI_COPY.yue = {...UI_COPY.zh,orderSubtitle:'好好食飯，由呢一份開始。',search:'搜尋餐點名稱、食材或類別…',submit:'確認落單',empty:'仲未有訂單，揀份午餐先。'};
function ui(key){
 const original={admin:'Admin',today:t('nav_menu'),backup:t('section_file'),print:t('admin_stats_print'),step1:t('help_step_1_title'),step2:t('help_step_2_title'),step3:t('help_step_3_title'),seat:t('label_seat'),seatPlaceholder:t('placeholder_seat'),selectedLabel:t('label_meal'),unselected:t('meal_placeholder'),submit:t('btn_add'),guide:t('nav_help'),import:t('btn_import'),updates:t('update_btn'),settings:t('settings_title'),select:t('meal_placeholder'),empty:t('log_empty'),removed:t('admin_order_deleted')};
 return original[key]!==undefined?original[key]:(UI_COPY[currentLang]||UI_COPY.en)[key]||UI_COPY.en[key]||key;
}
function esc(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function icon(name){return '<svg class="ui-icon" aria-hidden="true"><use href="#i-'+name+'"/></svg>'}
function mealName(meal){return meal.name[currentLang]||meal.name.zh||meal.name.en||Object.values(meal.name)[0]||''}
function motionOK(){return !reduceMotion&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
const STORAGE_KEY='campus-lunch-redesign-v2';
let activeFilter='all',searchTerm='',toastTimer,submitTimer,lastDialogFocus=null,storageWarning=false;
const META={
 1:{category:'bento',en:'PORK RIB BENTO',desc:'香酥排骨，搭配時蔬與白飯',eng:'Crispy pork, vegetables and steamed rice.',tag:'popular',bg:'#45362e'},
 2:{category:'bento',en:'CHICKEN LEG BENTO',desc:'招牌雞腿，每一口都很滿足',eng:'Golden chicken with seasonal sides.',tag:'popular',bg:'#48372e'},
 3:{category:'vegetarian',en:'VEGETARIAN BENTO',desc:'新鮮蔬食，清爽也能吃得豐盛',eng:'Fresh vegetables, tofu and steamed rice.',tag:'plant',bg:'#293c35'},
 4:{category:'rice',en:'BRAISED PORK RICE',desc:'慢火滷製，熟悉的台灣好味道',eng:'Slow-braised pork on warm fluffy rice.',tag:'classic',bg:'#483931'},
 5:{category:'soup',en:'PORK MEATBALL SOUP',desc:'清甜熱湯，為午餐添一點暖意',eng:'A comforting bowl of savory meatball soup.',tag:'warm',bg:'#303e49'}
};
function metaFor(m){return META[m.id]||{category:/素|蔬|vege/i.test(mealName(m))?'vegetarian':'bento',en:'DAILY SELECTION',desc:'今天的美味選擇，為午餐多一點期待',eng:'A fresh addition to your daily lunch.',tag:'fresh',bg:'#393244'}}
function foodArt(m){
 const meta=metaFor(m),isVeg=meta.category==='vegetarian';
 if(meta.category==='soup')return '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M23 9c-5 5 5 5 0 10m10-13c-5 5 5 5 0 10m10-8c-5 5 5 5 0 10" stroke="#b6cbd0" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".6"/><ellipse cx="32" cy="32" rx="25" ry="10" fill="#ccd6d8"/><path d="M7 32c1 20 14 25 25 25s24-5 25-25" fill="#8da5b7"/><ellipse cx="32" cy="32" rx="23" ry="8" fill="#c6a979"/><circle cx="21" cy="30" r="5" fill="#dfc9a2"/><circle cx="34" cy="28" r="5" fill="#e5d0ab"/><circle cx="42" cy="34" r="5" fill="#ddc299"/><path d="m25 35 5 1m8-11 3 2m-21 9 2 2" stroke="#538662" stroke-width="2" stroke-linecap="round"/></svg>';
 if(meta.category==='rice')return '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M7 29h50c-1 20-11 28-25 28S8 49 7 29Z" fill="#dfcfb7"/><path d="M10 34c2 10 8 15 13 17" stroke="#faf0db" stroke-width="2.5" fill="none"/><ellipse cx="32" cy="29" rx="25" ry="11" fill="#f2e3c8"/><ellipse cx="31" cy="27" rx="20" ry="9" fill="#ad6a3a"/><path d="m20 23 8 2m2-4 7 2m-15 6 7 2m3-4 8 2m-2-6 6 2" stroke="#d49358" stroke-width="4" stroke-linecap="round"/><ellipse cx="44" cy="25" rx="7" ry="8" fill="#fff0c9" transform="rotate(30 44 25)"/><ellipse cx="44" cy="25" rx="3" ry="4" fill="#e6ab45" transform="rotate(30 44 25)"/><path d="m13 28 4-6 4 6m-1-10 5 2" stroke="#769966" stroke-width="3" fill="none" stroke-linecap="round"/></svg>';
 return '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="10" width="52" height="45" rx="9" fill="#b18c69"/><rect x="8" y="9" width="48" height="42" rx="7" fill="#ecd6b0"/><path d="M35 11v38M10 31h23" stroke="#b99b76" stroke-width="2"/><rect x="11" y="12" width="21" height="16" rx="4" fill="#f7edd7"/><path d="m15 16 3-1m4 2 3-1m-10 5 3 1m5 1 3-1" stroke="#d7c6a4" stroke-width="1.5" stroke-linecap="round"/><circle cx="18" cy="37" r="5" fill="#729667"/><circle cx="15" cy="40" r="4" fill="#84a674"/><circle cx="23" cy="39" r="5" fill="#6c905d"/><rect x="12" y="43" width="15" height="4" rx="2" fill="#b3be71"/>'+(isVeg?'<rect x="39" y="14" width="13" height="12" rx="3" fill="#d7a45f"/><path d="m40 16 10 7m-10-3 7 5" stroke="#b68345" stroke-width="1.2"/><circle cx="44" cy="36" r="7" fill="#819c60"/><circle cx="48" cy="41" r="6" fill="#6f8b53"/><path d="m39 42 5-7m-3 8 8-3" stroke="#bed099" stroke-width="1.4"/>':m.id===2?'<path d="M42 36c-8-2-6-17 3-19 8-1 10 9 7 13l-6 9-4-3Z" fill="#c9843b"/><path d="m44 38 4 6 3-2-5-6" fill="#eddbc0"/><circle cx="49" cy="44" r="3" fill="#f7e4c7"/><path d="m43 22 5 3m-7 2 7 4" stroke="#e5a85a" stroke-width="2.5" stroke-linecap="round"/>':'<path d="M40 15c6-3 13 0 13 7l-2 20c-4 6-12 4-13-1l1-20 1-6Z" fill="#b87b44"/><path d="m42 20 7 4m-8 3 7 4m-8 3 7 4" stroke="#dfaa69" stroke-width="2.8" stroke-linecap="round"/>')+'</svg>';
}
function persist(){
 try{localStorage.setItem(STORAGE_KEY,JSON.stringify({orders,menu:MENU,announcements,settings:{lang:currentLang,theme:currentTheme,font:currentFontSize,reduceMotion,textOutline,customColors,followDevice}}))}
 catch(e){if(!storageWarning){storageWarning=true;showToast(ui('storageError'))}}
}
function normalizeData(data){
 if(!data||!Array.isArray(data.orders)||data.orders.length>10000)throw new Error('Invalid orders');
 const validName=n=>n&&typeof n==='object'&&!Array.isArray(n)&&Object.values(n).length&&Object.values(n).every(s=>typeof s==='string'&&s.length<=250);
 const validPrice=p=>typeof p==='number'&&Number.isFinite(p)&&p>=0&&p<=100000;
 if(!data.orders.every(o=>o&&Number.isInteger(o.seat)&&o.seat>=1&&o.seat<=50&&Number.isInteger(o.mealId)&&validName(o.name)&&validPrice(o.price)&&typeof o.time==='string'&&o.time.length<=100))throw new Error('Invalid order');
 if(data.menu!==undefined&&(!Array.isArray(data.menu)||data.menu.length>200||!data.menu.every(m=>m&&Number.isInteger(m.id)&&m.id>0&&validName(m.name)&&validPrice(m.price)&&typeof m.available==='boolean')||new Set(data.menu.map(m=>m.id)).size!==data.menu.length))throw new Error('Invalid menu');
 if(data.announcements!==undefined&&(!Array.isArray(data.announcements)||data.announcements.length>100||!data.announcements.every(a=>a&&typeof a.text==='string'&&a.text.length<10000)))throw new Error('Invalid announcement');
 return data;
}
function loadState(){
 try{const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return;const data=normalizeData(JSON.parse(raw));orders=data.orders;if(data.menu){MENU.splice(0,MENU.length,...data.menu);nextMenuId=Math.max(0,...MENU.map(m=>m.id))+1}announcements=data.announcements||[];const s=data.settings||{};if(I18N[s.lang])currentLang=s.lang;if(['dark','light','dark-gray','blue','custom','auto'].includes(s.theme))currentTheme=s.theme;if(Number.isInteger(s.font)&&s.font>=12&&s.font<=24)currentFontSize=s.font;reduceMotion=!!s.reduceMotion;textOutline=!!s.textOutline;followDevice=!!s.followDevice;if(s.customColors&&Object.keys(defaultColors.dark).every(k=>/^#[0-9a-f]{6}$/i.test(s.customColors[k])))customColors=s.customColors}
 catch(e){/* A malformed backup must not stop the interface from loading. */}
}
function renderMenuGrid(){
 const available=MENU.filter(m=>m.available),container=document.getElementById('menuGrid');
 let list=available.filter(m=>(activeFilter==='all'||metaFor(m).category===activeFilter)&&(!searchTerm||[...Object.values(m.name),metaFor(m).en,metaFor(m).desc,metaFor(m).eng,ui(metaFor(m).category)].join(' ').toLowerCase().includes(searchTerm)));
 const sort=document.getElementById('sortSelect')?.value||'default';
 if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='name')list.sort((a,b)=>mealName(a).localeCompare(mealName(b),currentLang==='yue'?'zh-TW':currentLang));
 const chinese=['zh','zh-CN','yue'].includes(currentLang);
 container.innerHTML=list.length?list.map((m,i)=>{
 const meta=metaFor(m);return '<button type="button" class="meal-card '+(selectedMealId===m.id?'selected':'')+'" style="--i:'+i+';--art-bg:'+meta.bg+'" data-meal-id="'+m.id+'" aria-pressed="'+(selectedMealId===m.id)+'" onclick="chooseMeal('+m.id+')" aria-label="'+esc(mealName(m))+', $'+m.price+'"><span class="card-select">'+icon('check')+'</span><div class="meal-card-top"><div class="meal-art">'+foodArt(m)+'</div><div style="min-width:0"><div class="meal-subtitle">'+String(MENU.indexOf(m)+1).padStart(2,'0')+'</div><h3>'+esc(mealName(m))+'</h3></div></div><div class="meal-card-bottom"><span class="card-price">$'+m.price+'</span></div></button>';
 }).join(''):'<div class="empty-catalog">'+icon('search')+ui('noResults')+'<button onclick="resetFilters()">'+ui('reset')+'</button></div>';
 document.getElementById('heroMenuCount').textContent=available.length;
 document.getElementById('resultCount').textContent=list.length+' '+ui('results');
 const counts={all:available.length,bento:0,vegetarian:0,rice:0,soup:0};available.forEach(m=>counts[metaFor(m).category]++);
 Object.entries({All:'all',Bento:'bento',Veg:'vegetarian',Rice:'rice',Soup:'soup'}).forEach(([id,key])=>document.getElementById('count'+id).textContent=counts[key]);
 if(selectedMealId&&!available.some(m=>m.id===selectedMealId)){selectedMealId=null;updateSelection()}
}
function filterMeals(category){activeFilter=category;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===category);b.setAttribute('aria-pressed',b.dataset.filter===category)});renderMenuGrid()}
function searchMeals(value){searchTerm=value.trim().toLowerCase();document.getElementById('clearSearch').classList.toggle('visible',!!value);renderMenuGrid()}
function resetSearch(){document.getElementById('menuSearch').value='';searchMeals('');document.getElementById('menuSearch').focus()}
function resetFilters(){filterMeals('all');resetSearch()}
function chooseMeal(id){if(!MENU.some(m=>m.id===id&&m.available))return;selectedMealId=id;updateSelection();document.getElementById('mealTrigger').classList.remove('field-error');document.getElementById('stepMeal').classList.add('current');const panel=document.getElementById('orderSection');if(window.innerWidth<=960)scrollToSection('orderSection');if(motionOK()){const preview=document.getElementById('previewSymbol');preview.animate([{transform:'scale(.7) rotate(-12deg)'},{transform:'scale(1.12) rotate(3deg)'},{transform:'scale(1) rotate(0deg)'}],{duration:400,easing:'cubic-bezier(.22,1,.36,1)'})}}
function updateSelection(){
 const meal=MENU.find(m=>m.id===selectedMealId&&m.available);
 document.getElementById('mealTrigger').textContent=meal?mealName(meal):ui('select');
 document.getElementById('previewName').textContent=meal?mealName(meal):ui('unselected');
 document.getElementById('previewPrice').textContent=meal?'$'+meal.price:'—';
 document.querySelectorAll('[data-meal-id]').forEach(c=>{const chosen=Number(c.dataset.mealId)===selectedMealId;c.classList.toggle('selected',chosen);c.setAttribute('aria-pressed',chosen)});
 document.querySelectorAll('.custom-option').forEach(c=>{const chosen=Number(c.dataset.value)===selectedMealId;c.classList.toggle('selected',chosen);c.setAttribute('aria-selected',chosen)});
 document.getElementById('stepMeal').classList.toggle('current',!!meal);
}
function renderCustomSelect(){
 document.getElementById('mealDropdown').innerHTML=MENU.filter(m=>m.available).map(m=>'<div class="custom-option" role="option" aria-selected="'+(m.id===selectedMealId)+'" tabindex="-1" data-value="'+m.id+'" onclick="selectMeal(this)"><span>'+esc(mealName(m))+'</span><span>$'+m.price+'</span></div>').join('');
 updateSelection();
}
function selectMeal(el){chooseMeal(Number(el.dataset.value));closeDropdown();document.getElementById('mealTrigger').focus()}
const originalToggleDropdown=toggleDropdown,originalCloseDropdown=closeDropdown;
toggleDropdown=function(){originalToggleDropdown();document.getElementById('mealTrigger').setAttribute('aria-expanded',dropdownOpen);if(dropdownOpen){const options=document.querySelectorAll('#mealDropdown .custom-option');options[0]?.focus()}};
closeDropdown=function(){originalCloseDropdown();document.getElementById('mealTrigger').setAttribute('aria-expanded','false')};
function updateNumber(id,value,prefix='',suffix=''){
 const el=document.getElementById(id),from=Number(el.dataset.value||0);el.dataset.value=value;if(el._frame)cancelAnimationFrame(el._frame);
 const write=n=>{el.textContent=prefix+n.toLocaleString('en-US')+suffix};
 if(!motionOK()||from===value){write(value);return}const start=performance.now();el.classList.remove('updated');void el.offsetWidth;el.classList.add('updated');
 const step=now=>{const p=Math.min(1,(now-start)/450);write(Math.round(from+(value-from)*(1-Math.pow(1-p,3))));if(p<1)el._frame=requestAnimationFrame(step)};el._frame=requestAnimationFrame(step);
}
function renderStats(){
 const rows=new Map();MENU.filter(m=>m.available).forEach(m=>rows.set(m.id,{name:mealName(m),price:m.price,count:0,sum:0}));
 orders.forEach(o=>{if(!rows.has(o.mealId))rows.set(o.mealId,{name:mealName(o),price:o.price,count:0,sum:0});const row=rows.get(o.mealId);row.count++;row.sum+=o.price});
 document.getElementById('statsBody').innerHTML=Array.from(rows.values()).map(r=>'<tr><td>'+esc(r.name)+'</td><td>$'+r.price+'</td><td><span class="qty-badge '+(r.count?'nonzero':'')+'">'+r.count+'</span></td><td>$'+r.sum.toLocaleString('en-US')+'</td></tr>').join('');
 const amount=orders.reduce((s,o)=>s+o.price,0);updateNumber('totalCount',orders.length,'',' '+t('unit_orders'));updateNumber('totalAmount',amount,'$');updateNumber('heroTotal',orders.length);updateNumber('heroAmount',amount,'$');persist();
}
function renderLog(){
 document.getElementById('logCount').textContent=orders.length;
 const area=document.getElementById('logArea');if(!orders.length){area.innerHTML='<div class="empty">'+icon('bag')+'<span>'+ui('empty')+'</span></div>';return}
 area.innerHTML=orders.slice().reverse().map((o,i)=>'<div class="log-entry"><div class="meal-info"><span class="seat">'+esc(t('log_seat',{seat:o.seat}))+'</span> · '+esc(mealName(o))+'</div><div style="display:flex;align-items:center;gap:5px"><span class="time">'+esc(o.time)+'</span><button class="delete-btn" onclick="deleteOrder('+(orders.length-1-i)+')" aria-label="'+esc(t('admin_order_delete'))+' '+esc(t('log_seat',{seat:o.seat}))+'">×</button></div></div>').join('');
}
function deleteOrder(index){orders.splice(index,1);renderStats();renderLog();showToast(ui('removed'))}
function showToast(msg){const el=document.getElementById('toast');clearTimeout(toastTimer);el.textContent=msg;el.setAttribute('role','status');el.classList.remove('show');void el.offsetWidth;el.classList.add('show');toastTimer=setTimeout(()=>el.classList.remove('show'),3200)}
function fieldError(id,message){const el=document.getElementById(id);el.classList.remove('field-error');void el.offsetWidth;el.classList.add('field-error');el.focus();showToast(message)}
function addOrder(e){
 if(e)e.stopPropagation();if(submitTimer)return;
 const raw=document.getElementById('seatInput').value,seat=Number(raw);
 if(!raw||!Number.isInteger(seat)||seat<1||seat>50){fieldError('seatInput',t('toast_seat_invalid'));return}
 const meal=MENU.find(m=>m.id===selectedMealId&&m.available);if(!meal){fieldError('mealTrigger',t('toast_meal_invalid'));return}
 const button=document.getElementById('submitOrder');button.disabled=true;button.classList.add('sending');button.innerHTML='<span>'+ui('saving')+'</span>'+icon('clock');
 submitTimer=setTimeout(()=>{
 orders.push({seat,mealId:meal.id,name:{...meal.name},price:meal.price,time:new Date().toLocaleTimeString('zh-TW',{hour12:false})});
 selectedMealId=null;document.getElementById('seatInput').value='';updateSelection();renderStats();renderLog();
 button.classList.remove('sending');button.innerHTML='<span>'+ui('saved')+'</span>'+icon('check');document.getElementById('orderSection').classList.add('order-success');
 showToast(t('toast_order_success',{seat,meal:mealName(meal)}));
 setTimeout(()=>{button.disabled=false;button.innerHTML='<span>'+ui('submit')+'</span>'+icon('arrow');document.getElementById('orderSection').classList.remove('order-success');document.getElementById('seatInput').focus({preventScroll:true});submitTimer=null},850);
 },motionOK()?300:0);
}
function queryOrder(e){
 if(e)e.stopPropagation();const raw=document.getElementById('querySeat').value,seat=Number(raw),result=document.getElementById('queryResult');
 if(!raw||!Number.isInteger(seat)||seat<1||seat>50){result.innerHTML='<div class="query-result" style="color:#ef91a4">'+esc(t('toast_query_invalid'))+'</div>';return}
 const found=orders.filter(o=>o.seat===seat),total=found.reduce((s,o)=>s+o.price,0);
 result.innerHTML='<div class="query-result">'+(found.length?'<strong>'+esc(t('query_title',{seat}))+'</strong><br>'+found.map(o=>esc(mealName(o))+' · $'+o.price).join('<br>')+'<br><strong>'+esc(t('query_subtotal',{total,count:found.length}))+'</strong>':esc(t('query_no_record',{seat})))+'</div>';
}
function downloadFile(text,type,name){const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function exportJSON(e){if(e)e.stopPropagation();downloadFile(JSON.stringify({exportDate:new Date().toISOString(),menu:MENU,orders,announcements,summary:{totalOrders:orders.length,totalAmount:orders.reduce((s,o)=>s+o.price,0)}},null,2),'application/json','lunch-backup-'+new Date().toISOString().slice(0,10)+'.json');showToast(t('toast_exported'))}
function exportCSV(e){if(e)e.stopPropagation();if(!orders.length){showToast(t('toast_no_export'));return}const rows=[['#',t('label_seat'),t('th_meal'),t('th_price')],...orders.map((o,i)=>[i+1,o.seat,mealName(o),o.price]),['','',t('summary_amount_label'),orders.reduce((s,o)=>s+o.price,0)]];const cell=v=>'"'+String(v).replace(/^[=+@\t\r]/,"'$&").replace(/"/g,'""')+'"';downloadFile('\uFEFF'+rows.map(row=>row.map(cell).join(',')).join('\r\n'),'text/csv;charset=utf-8','lunch-orders-'+new Date().toISOString().slice(0,10)+'.csv');showToast(currentLang==='en'?'CSV exported':'CSV 已匯出')}
function applyImported(data){normalizeData(data);orders=data.orders;if(data.menu){MENU.splice(0,MENU.length,...data.menu);nextMenuId=Math.max(0,...MENU.map(m=>m.id))+1}announcements=data.announcements||[];selectedMealId=null;renderMenuGrid();renderCustomSelect();renderStats();renderLog();renderAnnouncement();persist();if(document.getElementById('adminModal').classList.contains('show'))renderAdminTab();showToast(t('toast_imported',{count:orders.length}))}
function readBackup(input){const file=input.files[0];if(!file)return;if(file.size>8*1024*1024){showToast(t('toast_invalid_format'));input.value='';return}const reader=new FileReader();reader.onload=()=>{try{const data=normalizeData(JSON.parse(reader.result));if(orders.length)showConfirmDialog(t('confirm_title'),currentLang==='en'?'Replace current orders with this backup? Export first if you need to keep them.':'要以備份取代目前訂單嗎？如需保留現有資料，請先匯出備份。',()=>applyImported(data));else applyImported(data)}catch(e){showToast(t('toast_invalid_format'))}};reader.onerror=()=>showToast(t('toast_read_failed'));reader.readAsText(file);input.value=''}
function importJSON(event){readBackup(event.target)}
function adminImportData(){readBackup(document.getElementById('adminImportFile'))}
const oldAnnouncement=renderAnnouncement;
renderAnnouncement=function(){oldAnnouncement();persist()};
const oldSetLanguage=setLanguage;
setLanguage=function(lang){if(!I18N[lang])return;oldSetLanguage(lang);document.querySelectorAll('[data-ui]').forEach(el=>el.innerHTML=ui(el.dataset.ui));document.querySelectorAll('[data-ui-placeholder]').forEach(el=>el.placeholder=ui(el.dataset.uiPlaceholder));renderMenuGrid();updateSelection();document.getElementById('langToggle').setAttribute('aria-expanded','false');persist()};
const oldApplyTheme=applyTheme;
applyTheme=function(theme){oldApplyTheme(theme);document.documentElement.style.colorScheme=['dark','dark-gray','blue'].includes(theme)?'dark':theme==='light'?'light':'normal';document.querySelectorAll('.theme-option').forEach(el=>el.setAttribute('aria-pressed',el.classList.contains('active')));persist()};
const oldSetReduceMotion=setReduceMotion;setReduceMotion=function(enabled){oldSetReduceMotion(enabled);persist()};
const oldSetTextOutline=setTextOutline;setTextOutline=function(enabled){oldSetTextOutline(enabled);persist()};
const oldSettings=renderSettingsModal;
renderSettingsModal=function(){
 oldSettings();
 document.querySelectorAll('#settingsContent .theme-option').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-label',el.title);el.setAttribute('aria-pressed',el.classList.contains('active'));el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}}});
 document.querySelectorAll('#settingsContent .toggle-switch,#settingsContent .rgb-toggle-switch').forEach(el=>{el.tabIndex=0;el.setAttribute('role','switch');el.setAttribute('aria-checked',el.classList.contains('active'));el.setAttribute('aria-label',el.parentElement.querySelector('span')?.textContent||'RGB');el.addEventListener('click',()=>el.setAttribute('aria-checked',el.classList.contains('active')));el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}}});
 const slider=document.getElementById('fontSizeSlider');slider.setAttribute('aria-label',t('slider_font_size'));
};
document.querySelectorAll('.lang-option').forEach(el=>{el.setAttribute('role','menuitem');el.tabIndex=0;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();const options=[...document.querySelectorAll('.lang-option')],index=options.indexOf(el);options[(index+(e.key==='ArrowDown'?1:-1)+options.length)%options.length].focus()}}});
document.getElementById('langDropdown').setAttribute('role','menu');
document.getElementById('langToggle').addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();document.getElementById('langDropdown').classList.add('open');e.currentTarget.setAttribute('aria-expanded','true');document.querySelector('.lang-option').focus()}});
function navigateTo(event,id){event.preventDefault();scrollToSection(id);if(event.currentTarget.closest('.topbar-nav')){document.querySelectorAll('.topbar-nav a').forEach(a=>a.classList.remove('active'));event.currentTarget.classList.add('active')}}
function scrollToSection(id){const el=document.getElementById(id);if(!el)return;el.scrollIntoView({behavior:motionOK()?'smooth':'instant',block:'start'});el.classList.remove('highlight-flash');void el.offsetWidth;el.classList.add('highlight-flash');setTimeout(()=>el.classList.remove('highlight-flash'),1200)}
function printOrders(){if(!orders.length){showToast(t('toast_no_export'));return}const area=document.getElementById('printArea');area.innerHTML='<h1 style="margin-bottom:20px">'+esc(t('footer_system'))+'</h1><p>'+esc(new Date().toLocaleString())+'</p><table style="width:100%;border-collapse:collapse;margin-top:20px"><thead><tr><th>座號 / Seat</th><th>'+esc(t('th_meal'))+'</th><th>'+esc(t('th_price'))+'</th></tr></thead><tbody>'+orders.map(o=>'<tr><td style="padding:10px;border-bottom:1px solid #ddd">'+o.seat+'</td><td style="padding:10px;border-bottom:1px solid #ddd">'+esc(mealName(o))+'</td><td style="padding:10px;border-bottom:1px solid #ddd">$'+o.price+'</td></tr>').join('')+'</tbody></table><p style="text-align:right;font-weight:700;margin-top:20px">'+esc(t('summary_amount_label'))+': $'+orders.reduce((s,o)=>s+o.price,0)+'</p>';window.print()}
// Restore focus, trap tab navigation, and make background controls inert in dialogs.
document.querySelectorAll('.modal-overlay,.confirm-overlay').forEach(overlay=>{
 overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-hidden','true');overlay.tabIndex=-1;
 const heading=overlay.querySelector('h2,h3');if(heading){if(!heading.id)heading.id=overlay.id+'Title';overlay.setAttribute('aria-labelledby',heading.id)}else overlay.setAttribute('aria-label',overlay.id==='helpModal'?'使用說明':'更新紀錄');
 overlay.querySelector('.modal-close')?.setAttribute('aria-label','關閉');
});
const dialogObserver=new MutationObserver(records=>{
 let focusTarget=null,shouldRestore=false;
 for(const record of records){const el=record.target;if(!el.matches('.modal-overlay,.confirm-overlay'))continue;const open=el.classList.contains('show');el.setAttribute('aria-hidden',!open);if(open){if(!document.querySelector('.modal-overlay.show,.confirm-overlay.show')?.contains(lastDialogFocus))lastDialogFocus=document.activeElement;focusTarget=el}else shouldRestore=true}
 const opened=[...document.querySelectorAll('.modal-overlay.show,.confirm-overlay.show')];const anyOpen=opened.length>0;
 document.body.style.overflow=anyOpen?'hidden':'';
 document.querySelectorAll('body>header,body>main,body>footer,body>.hero,body>.mobile-order-link,body>.announcement-banner').forEach(el=>el.inert=anyOpen);
 opened.forEach(el=>el.inert=el!==opened[opened.length-1]);
 if(focusTarget)setTimeout(()=>{(focusTarget.querySelector('input,button,[tabindex="0"]')||focusTarget).focus({preventScroll:true})},40);
 else if(shouldRestore&&!anyOpen){lastDialogFocus?.focus({preventScroll:true});lastDialogFocus=null}
});
document.querySelectorAll('.modal-overlay,.confirm-overlay').forEach(el=>dialogObserver.observe(el,{attributes:true,attributeFilter:['class']}));
document.addEventListener('keydown',e=>{
 const dialog=[...document.querySelectorAll('.modal-overlay.show,.confirm-overlay.show')].pop();
 if(dialog&&e.key==='Tab'){const elements=[...dialog.querySelectorAll('button,input,select,textarea,a[href],[tabindex="0"]')].filter(el=>!el.disabled&&el.getClientRects().length);if(!elements.length){e.preventDefault();dialog.focus();return}const first=elements[0],last=elements[elements.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
 if(e.key==='/'&&!dialog&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();document.getElementById('menuSearch').focus()}
});
document.getElementById('mealSelectWrapper').addEventListener('keydown',e=>{
 const options=[...document.querySelectorAll('#mealDropdown .custom-option')];const idx=options.indexOf(document.activeElement);
 if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();if(!dropdownOpen){toggleDropdown();return}const next=e.key==='Home'?0:e.key==='End'?options.length-1:e.key==='ArrowDown'?(idx+1)%options.length:(idx-1+options.length)%options.length;options[next]?.focus()}
 if(e.key==='Enter'||e.key===' '){e.preventDefault();if(document.activeElement.dataset.value)selectMeal(document.activeElement);else toggleDropdown()}
 if(e.key==='Escape'){closeDropdown();document.getElementById('mealTrigger').focus()}if(e.key==='Tab')closeDropdown();
});
// The redesigned form handles Enter through standard form submission.
document.getElementById('seatInput').replaceWith(document.getElementById('seatInput').cloneNode(true));
document.addEventListener('click',e=>{
 const button=e.target.closest('.btn,.filter-btn,.meal-card');if(!button||!motionOK()||button.disabled)return;
 const rect=button.getBoundingClientRect(),size=Math.max(rect.width,rect.height),r=document.createElement('span');r.className='ripple';r.style.width=r.style.height=size+'px';r.style.left=(e.clientX-rect.left-size/2)+'px';r.style.top=(e.clientY-rect.top-size/2)+'px';button.appendChild(r);setTimeout(()=>r.remove(),700);
 if(e.target.closest('#langToggle'))document.getElementById('langToggle').setAttribute('aria-expanded',document.getElementById('langDropdown').classList.contains('open'));
});
defaultColors.dark={bg:'#121118',fg:'#f2f0fa',muted:'#9692a8',border:'#302d3d',card:'#1d1b27',accent:'#a49aff'};
defaultColors['dark-gray']={bg:'#202027',fg:'#f0eef5',muted:'#aaa6b8',border:'#3c3948',card:'#292733',accent:'#b4a8f5'};
defaultColors.light={bg:'#f7f6fb',fg:'#292535',muted:'#777185',border:'#e2deed',card:'#ffffff',accent:'#7a62c8'};
currentTheme='dark';textOutline=false;customColors={...defaultColors.dark};
Object.keys(I18N).forEach(lang=>{
 const chinese=['zh','zh-CN','yue'].includes(lang);Object.assign(I18N[lang],{
 confirm_title:chinese?'確認操作':lang==='ja'?'確認':lang==='ko'?'확인':'Confirm action',
 stats_empty:I18N[lang].admin_stats_empty,print_title:I18N[lang].footer_system,print_seat:I18N[lang].label_seat,print_meal:I18N[lang].th_meal,print_price:I18N[lang].th_price,print_total:I18N[lang].summary_amount_label,print_date:chinese?'列印日期':'Date'
 });
});
loadState();
document.documentElement.style.setProperty('--base-font-size',currentFontSize+'px');
document.body.classList.toggle('reduce-motion',reduceMotion);
setLanguage(currentLang);applyTheme(currentTheme);renderCustomSelect();renderStats();renderLog();renderAnnouncement();if(followDevice)setupDeviceListener();
window.addEventListener('pagehide',persist);
document.getElementById('settingsContent').addEventListener('input',()=>setTimeout(persist,0));

