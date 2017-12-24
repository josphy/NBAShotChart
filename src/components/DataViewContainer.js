import React from 'react'
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider"
import _ from 'lodash';
import {Radio, Row, Col, Switch} from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        charType: "hexbin",
        displayToolTips: true,
    }

    onCountSliderChange = (value) => {
        this.setState({minCount: value});
    }

    onCharTypeChange = (e) => {
        this.setState({
            charType: e.target.value,
        });
    }

    onSwitchChange = (checked) => {
        this.setState({displayToolTips: checked});
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart minCount={this.state.minCount}
                           playerId={this.props.playerId}
                           charType={this.state.charType}
                           displayToolTips={this.state.displayToolTips}/>
                <div className="filters">
                    {this.state.charType == "hexbin" ? (
                        <CountSlider onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/>
                    ) : null}
                    <Row className="char-type-radio">
                        <Col span={12} offset={3}>
                            <RadioGroup onChange={this.onCharTypeChange} value={this.state.charType}>
                                <Radio value="hexbin">Hex</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={6}>
                            <span>Tooltip: </span>
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                onChange={this.onSwitchChange}
                                defaultChecked/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}