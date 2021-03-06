import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DataTableStyleDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.yearTemplate = this.yearTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }
    
    yearTemplate(rowData, column) {
        let year = rowData.year;
        let bgColor = year > 2010 ? '#5cb85c' : '#ffffff';
        
        return <div style={{backgroundColor: bgColor, padding: '.25em .5em'}}>{year}</div>;
    }
    
    rowClassName(rowData) {
        let brand = rowData.brand;
        
        return {'ui-state-highlight' : (brand === 'Jaguar')};
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Styling</h1>
                        <p>Particular rows and cells can be styled based on data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <p>This datatable highlights cell whose year value is greater than 2010 and highlights rows whose brand is a Jaguar.</p>
                    <DataTable value={this.state.cars} rowClassName={this.rowClassName}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" body={this.yearTemplate} style={{padding: 0}}/>
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableStyleDemoDoc></DataTableStyleDemoDoc>
            </div>
        );
    }
}

export class DataTableStyleDemoDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {CarService} from '../service/CarService';

export class DataTableStyleDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.yearTemplate = this.yearTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }
    
    yearTemplate(rowData, column) {
        let year = rowData.year;
        let bgColor = year > 2010 ? '#5cb85c' : '#ffffff';
        
        return <div style={{backgroundColor: bgColor, padding: '.25em .5em'}}>{year}</div>;
    }
    
    rowClassName(rowData) {
        let brand = rowData.brand;
        
        return {'ui-state-highlight' : (brand === 'Jaguar')};
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Styling</h1>
                        <p>Particular rows and cells can be styled based on data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <p>This datatable highlights cell whose year value is greater than 2010 and highlights rows whose brand is a Jaguar.</p>
                    <DataTable value={this.state.cars} rowClassName={this.rowClassName}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" body={this.yearTemplate} style={{padding: 0}}/>
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>
            </div>
        );
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
