import { Component, EventEmitter, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ApplicationService, 
        ApplicationSettings, 
        BulkChangeStatusComponent, 
        BulkDeleteComponent, 
        CancelAction, 
        ComponentControl, 
        CustomAction, 
        DynamicService, 
        FluentSearchConfig, 
        FluentTabConfig, 
        FluentTableComponent, 
        FluentTableConfig, 
        HeaderButtonItem, 
        HeaderDropdownItem, 
        HeaderItemsConfig, 
        InputControl, 
        LookupViewModel, 
        ModalFormComponent, 
        ModalFormConfig, 
        RenderButtonsPosition, 
        RowControl, 
        TextConfirmationModalComponent } from 'codera-shared';
import { ProductService } from '../services/product-service/product.service';
import { Product } from '../product';
import { ChangeRequestTypeGridModel, ChangeRequestTypeViewModel } from "./../types";
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Validators } from '@angular/forms';
import { MyCategoryPickerComponent } from '../my-category-picker/my-category-picker.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    pageTitle: string;
    private route: ActivatedRoute
    source: { [key: string]: any }[] | string = [];
    products:[];
    model: Product;
    modalConfig: ModalFormConfig;
    modelChange: EventEmitter<any>;
    fluentSearchConfig: FluentSearchConfig;
    fluentTableConfig: FluentTableConfig;
    applicationSettings: ApplicationSettings;
    deleteMassage: string;
    renderButtonsTypes = RenderButtonsPosition;
    headerItemsConfig: HeaderItemsConfig;
    categoryValue: any;
    changeRequestTypeFactory: any;
    tabsConfig: FluentTabConfig[];
    onCreateUpdate: EventEmitter<string | boolean>;
    currentFilter: { [key: string]: any }[] = [];
    @ViewChild(FluentTableComponent) fluentTableComponent: FluentTableComponent;

    ////////////////
    //constructor
    ///////////////
  constructor(private titleService: Title,
            private toastr: ToastrService,
            private productService: ProductService,
            private dynamicService: DynamicService,
            private viewContainerRef: ViewContainerRef,
            private applicationService: ApplicationService,
            private viewContainer: ViewContainerRef,) { 
                this.onCreateUpdate = new EventEmitter<string | boolean>();
            }

    //BEGIN ngOnInit()
    //////////////////
  ngOnInit() {
    const that = this;

    this.source = "Products/getTable";
    this.applicationSettings =
            this.applicationService.getApplicationSettings();
    this.fluentTableConfig = this.getFluentTableConfig();
        this.pageTitle = 'Product'
        this.headerItemsConfig = new HeaderItemsConfig([
            new HeaderButtonItem({
                name: "new-change-request-type",
                icon: "fa fa-plus",
                label: "Add new product",//"[MOCQuest].[Common].Buttons.ChangeRequestType.New",
                action: that.summonDialog
            }),
        ]);

        this.configModal();

        this.fluentSearchConfig = new FluentSearchConfig({
            controls: [
                new RowControl([
                    new InputControl({
                        field: "Name",
                        type: "text",
                        label: "Name",
                        css: "col-xs-12 col-sm-12 col-md-2 col-lg-2"
                    }),
                    new ComponentControl({
                        componentClass: MyCategoryPickerComponent,
                        field: "Category",
                        label:"Category",
                        css: "col-12",
                        data: [
                            {Category: this.categoryValue},
                        ],
                    }),
                ])
            ],
            searchAction: () => {
                that.fluentTableConfig.applyFilter(that.currentFilter);
            },
            resetAction: () => {
                that.fluentTableConfig.grouping = undefined;
                that.fluentTableConfig.sorting = [{ Name: "asc", Category: null }]
                that.fluentTableConfig.applyFilterAndGrouping(that.currentFilter);
                that.fluentTableComponent.table.groupedRows = undefined;
                that.fluentTableComponent.table.sorts = [{ prop: "Name", dir: "asc" }];
            }
        });
    }
    /////////////////////
   // END OF ngOnInit //
  /////////////////////
  configModal() {
    const that = this;
    //HERE
    that.modalConfig = new ModalFormConfig(
        "Product",
        [
            new RowControl([
                //0
                new InputControl({
                    type: "text",
                    field: "Name",
                    label: "Name",
                    min: 1,
                    max: 255,
                    required: true,
                    validators: [
                        Validators.required,
                    ]
                })
            ]),
            new RowControl([
                //0
                new InputControl({
                    type: "text",
                    field: "Description",
                    label: "Description",
                    min: 1,
                    max: 255,
                })
            ]),
            new RowControl([
                //1
                new ComponentControl({
                    componentClass: MyCategoryPickerComponent,
                        field: "Category",
                        label:"Category",
                        css: "col-12",
                        required: true,
                })
            ])
        ],
        [
            new CustomAction({
                actionType: "submit",
                field: "Submit",
                value: "Submit",
                callback: (row: Product) => {
                    that.model.Status
                    that.productService
                        .createOrUpdate(that.model)
                        .subscribe(
                            (response) => {
                                that.onCreateUpdate.emit(response);
                                that.modalConfig.modalRef.close();
                                that.fluentTableConfig.notifyDataChanged(
                                    "item-updated"
                                );
                            },
                            (error) => {
                                console.log(error.error.exception);
                                that.toastr.show(
                                    error.error.exception,
                                );
                            }
                        );
                },
                css: "btn btn-primary",
            }),
            new CancelAction({
                field: "Cancel",
                value: "Cancel",
                callback: () => {

                },
                css: "btn btn-default",
            }),
        ]
    );
}

  getFluentTableConfig() {
    const that = this;
    return new FluentTableConfig({
        columns: [
            {
                field: "Name",
                title: "Name",
                sortable: "Name",
                type: "string",
            },
            {
                field: "Description",
                title: "Description",
                type: "string"
            },
            {
                field: "Category.Name",
                title: "Category",
                type: "string",
            },
            {
                field: "Category.Status",
                title: "Category Status",
                type: "custom",
                render: (row: any) => {
                    return row.Category.Status;
                }
            },
            {
                field: "editAction",
                title: "Edit",
                type: "action",
                handler(row: Product) {
                    that.productService
                        .get(row.Id)
                        .subscribe((x:any) =>
                        {
                            that.model = x;
                            that.dynamicService.addComponent(
                                that.viewContainerRef,
                                ModalFormComponent,
                                [
                                    { config: that.modalConfig },
                                    { model: that.model },
                                ]
                            );

                        }
                        );
                },
                render(row: Product) {
                    return `<a class="btn btn-primary btn-sm btn-default yellow-stripe pull-right btn-overlay"><i class="fa fa-pencil"></i>&nbsp;<span>Edit</span></a>`;
                },
                flexGrow: 0.28,
            },
            {
                field: "deleteAction",
                title: "Delete",
                type: "action",
                handler(row: Product) {
                    that.dynamicService.addComponent(
                        that.viewContainerRef,
                        TextConfirmationModalComponent,
                        [
                            { modalHeader: "Delete" },
                            { modalText: "Do you want to delete "+row.Name+" ?" },
                             {submitButtonText:"yes"},
                            {
                                modalOptions: {
                                    size: "sm",
                                },
                            },
                            {
                                successCallback: () => {
                                    that.productService
                                        .delete(row.Id)
                                        .subscribe(() =>
                                            that.fluentTableConfig.notifyDataChanged(
                                                "item-deleted"
                                            )
                                        );
                                },

                            },
                        ],
                        true
                    );
                },
                render(row: ChangeRequestTypeGridModel) {
                    return `<a class="btn btn-danger btn-sm btn-default red-stripe pull-right btn-overlay"><i class="far fa-trash-alt"></i>&nbsp;<span>Delete</span></a>`;
                },
                flexGrow: 0.28,
            },
        ],
        sorting: {
            Name: "asc",
        },
        filter: null,
            footer: {
                show: true,
                showExports: false,
                showPageSize: true,
                showPaging: true,
                showRefreshButton: true
            },
    });}
    //END OF getFluentTableConfig()
    ///////////////////////////////
    summonDialog = () => {
        this.model = new Product()
        this.model = {
            Id:null,
            Name: '',
            Description:'',
            Category: null
        }
        this.modalConfig = this.getModalConfig(this.model);
        this.modalConfig.modalHeader = "New";
        this.dynamicService.addComponent(this.viewContainer, ModalFormComponent, [
            { "config": this.modalConfig },
            { "model": this.model },
            // { "modalOptions": { size: "sm" } }
        ], true);
    }
    //////////////
    //ADD PRODUCT
    //////////////
    getModalConfig(model: Product, onSave?: (result: LookupViewModel) => void): ModalFormConfig  {
        const that = this;
        
        return new ModalFormConfig(
            'New',
            [
                new RowControl([
                    //0
                    new InputControl({
                        type: "text",
                        field: "Name",
                        label: "Name",
                        min: 1,
                        max: 255,
                        required: true,
                        validators: [
                            Validators.required,
                        ]
                    })
                ]),
                new RowControl([
                    //0
                    new InputControl({
                        type: "text",
                        field: "Description",
                        label: "Description",
                        min: 1,
                        max: 255,
                    })
                ]),
                new RowControl([
                    //1
                    new ComponentControl({
                        componentClass: MyCategoryPickerComponent,
                            field: "Category",
                            label:"Category",
                            css: "col-12",
                            required: true,
                    })
                ])
               
                
            ],
            [
                
                new CustomAction({
                    actionType: "submit",
                    field: "Submit",
                    value: "Submit",
                    callback: (row: Product) => {
                        that.model.Status
                        that.productService
                            .createOrUpdate(that.model)
                            .subscribe(
                                (response) => {
                                    that.onCreateUpdate.emit(response);
                                    that.modalConfig.modalRef.close();
                                    that.fluentTableConfig.notifyDataChanged(
                                        "item-updated"
                                    );
                                },
                                (error) => {
                                    console.log(error.error.exception);
                                    that.toastr.show(
                                        error.error.exception,
                                    );
                                }
                            );
                    },
                    css: "btn btn-primary",
                }),
                new CancelAction({
                    field: 'Cancel',
                    value: '[ISOQuest].[Common].Buttons.Cancel',
                    callback() { },
                    css: 'btn btn-default'
                })
            ]
        );
    }


    bulkChangeStatus = () => {
        this.dynamicService.addComponent(this.viewContainer, BulkChangeStatusComponent, [
            { "fluentTable": this.fluentTableConfig },
            { "url": "ChangeRequestType/BulkChangeStatus" },
            { "modalOptions": { size: "sm" } }
        ]);
    }
    bulkDelete = () => {
        this.dynamicService.addComponent(this.viewContainer, BulkDeleteComponent, [
            { "fluentTable": this.fluentTableConfig },
            { "url": "ChangeRequestType/BulkDelete" },
            { "modalOptions": { size: "sm" } }
        ], true);
    }
}

