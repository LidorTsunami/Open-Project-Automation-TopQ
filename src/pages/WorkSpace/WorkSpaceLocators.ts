export class WorkSpaceLocators {
    public readonly filterButton = "#work-packages-filter-toggle-button"
    public readonly createDropdown: string = "button.-primary.add-work-package"
    public readonly taskButton: string = "a[role='menuitem']:has(span:text('Task'))"
    public readonly taskOptionsDropdown: string = "#content-body > openproject-base > div > ui-view > work-packages-base > div > ui-view > wp-view-page > div > div.work-packages-partitioned-page--content-container > div.work-packages-partitioned-page--content-right > op-wp-split-view > div > div.work-packages--details-toolbar-container > wp-details-toolbar > div > button"
    public readonly deleteTaskButton: string = "body > div.op-context-menu--overlay > ng-component > div > ul > li:nth-child(5) > a"
    public readonly confirmDeleteButton: string = '#wp_destroy_modal > div.spot-action-bar > div > button.button.button_no-margin.-danger.spot-action-bar--action'
}