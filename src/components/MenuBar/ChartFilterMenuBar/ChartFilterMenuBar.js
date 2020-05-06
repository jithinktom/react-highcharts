import React from 'react';
import ChartFilterForm from '../../ChartFilterForm/ChartFilterForm';
import { filterMenuItems } from '../../../utils/menuItems/filterMenuItems';
import { Button, Select, Dropdown, Menu } from 'antd';
import './ChartFilterMenuBar.scss';
import { actionItems } from './../../../utils/menuItems/actionMenu';

class ChartFilterMenuBar extends React.Component {

    renderFilterMenus = () => {
        return filterMenuItems.map(filterSection => {
            return <div className="menu-item" key={filterSection.name}>
                <Select
                    placeholder={filterSection.label}
                    dropdownClassName="filter-dropdown"
                    dropdownRender={menu => (
                        <ChartFilterForm filterSection={filterSection.name} formData={filterSection.children} />
                    )}
                >
                </Select>
            </div>
        })
    }

    renderActionMenus = () => {
        const renderSubMenus = (subMenus) => {
            return <Menu>
                {subMenus.map(menu => {
                    return <Menu.Item key={menu.value}>
                        {menu.label}
                    </Menu.Item>
                })}
            </Menu>
        }
        return actionItems.map(actionSection => {
            return <div className="menu-item" key={actionSection.name}>
                <Dropdown overlay={renderSubMenus(actionSection.children)}>
                    <Button>
                        {actionSection.label}
                    </Button>
                </Dropdown>
            </div>
        })
    }

    render() {
        return (
            <div className="chart-filter-menubar">
                <div className="menu-section">
                    {this.renderFilterMenus()}
                </div>
                <div className="menu-section">
                    {this.renderActionMenus()}
                </div>
            </div>
        );
    }
}

export default ChartFilterMenuBar;

