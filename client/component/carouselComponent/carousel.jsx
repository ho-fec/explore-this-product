import React from 'react';
import styles from '../explores/explores.css';
import RightArrow from './exploreArrowRight.jsx'
import LeftArrow from './exploreArrowLeft.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      translateValue: -20
    }

    this.leftSlide = this.leftSlide.bind(this);
    this.rightSlide = this.rightSlide.bind(this);
  }

  leftSlide () {
    this.setState({ translateValue: -15 })
  }

  rightSlide () {
    this.setState({ translateValue: -130 })
  }

  render () {
    return (
      <div className={styles.innercontainer}>
        <LeftArrow 
        leftSlide={this.leftSlide} 
        />
          <div className={styles.flexContainer}>
          {this.props.lists.map( (list, key) => {
          return <this.props.component 
          key={key} 
          list={list} 
          modalGet={this.props.modalGet} 
          translateValue={this.state.translateValue} 
          />})}
          </div>
        <RightArrow 
        rightSlide={this.rightSlide} 
        />
      </div>
    )
  }
}

export default Carousel;