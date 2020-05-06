
import React from 'react';
import { connect } from 'react-redux';
import { addFilterData } from '../../store/actions/chartActions';
import './ChartFilterForm.scss';
import { Radio, Checkbox } from 'antd';

class ChartFilterForm extends React.Component {

    constructor() {
        super();
        this.state = { chartFilterData: {} };
    }

    componentDidMount() {
        this.setState({
            chartFilterData: this.props.chartFilterData || {}
        });
    }

    handleChange = (e, filterName, filterType) => {
        var filterData = {
            filterSection: this.props.filterSection,
            filterName: filterName,
            filterType: filterType,
            filterValue: filterType === "radio" ? e.target.value : e
        }
        this.setState({
            chartFilterData: {
                ...this.state.chartFilterData,
                [filterData.filterName]: filterData.filterValue
            }
        }, () => this.props.addFilterData(this.state.chartFilterData, this.props.filterSection))
    }

    render() {
        return (
            <div className="filter-form">
                <form onSubmit={e => console.log("Form submitted")}>
                    {this.props.formData.map(section => {
                        return <section key={section.name}>
                            <span className="section-name">{section.label}</span>
                            {section.type === "checkbox" ?
                                <Checkbox.Group options={section.children} name={section.name} value={this.state.chartFilterData[section.name] || []} onChange={e => this.handleChange(e, section.name, section.type)} /> :
                                <Radio.Group options={section.children} name={section.name} value={this.state.chartFilterData[section.name]} onChange={e => this.handleChange(e, section.name, section.type)} />
                            }
                        </section>
                    })}
                </form>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        chartFilterData: state.chartData.filterData[ownProps.filterSection]
    }
}

export default connect(mapStateToProps, {
    addFilterData
})(ChartFilterForm)