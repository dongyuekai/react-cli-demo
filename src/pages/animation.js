// react-spring
// import { transform } from 'esbuild'
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import { useSpring, animated } from 'react-spring'
// export default () => {
//   const [state, toggle] = useState(true)
//   const { x } = useSpring({
//     from: { x: 0 },
//     x: state ? 1 : 0,
//     config: { duration: 1000 }
//   })
//   return (
//     <div onClick={() => toggle(!state)}>
//       <animated.div
//         style={{
//           opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//           transform:
//             x
//               .interpolate({
//                 range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//                 output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//               })
//               .interpolate(x => `scale(${x})`)
//         }}
//       >
//         Hello React Spring
//       </animated.div>
//     </div>
//   )
// }

// framer-motion
// import React, { useState } from 'react'
// import { motion } from 'framer-motion'

// export default () => {
//   const [isActive, setIsActive] = useState(false)
//   return (
//     <motion.div
//       style={{ width: '200px', margin: '0 auto', background: 'gray' }}
//       onClick={() => setIsActive(!isActive)}
//       animate={{
//         rotate: isActive ? 180 : 360
//       }}
//     >
//       Hello Framer motion
//     </motion.div>
//   )
// }

// react-transition-group
// import React from "react";
// import ReactDOM from "react-dom";
// import { Transition } from "react-transition-group";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       in: false
//     };
//   }
//   componentDidMount() { }
//   onClick = () => {
//     this.setState(state => ({ in: !state.in }));
//   };
//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.onClick}>BUTTON</button>
//         <Transition in={this.state.in} timeout={5000} mountOnEnter appear>
//           {state => <div className={`item item--${state}`} />}
//         </Transition>
//       </div>
//     );
//   }
// }

// export default App;

// react-motion
import React, { PureComponent } from 'react'
import { Animate } from 'react-move'
import { easeExpOut } from 'd3-ease'

const trackStyles = {
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  position: 'relative',
  margin: '5px 3px 10px',
  width: 250,
  height: 50,
}

class Example extends PureComponent {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
        >
          Toggle
        </button>
        <Animate
          start={() => ({
            x: 0,
          })}

          update={() => ({
            x: [this.state.open ? 200 : 0],
            timing: { duration: 750, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { x } = state

            return (
              <div style={trackStyles}>
                <div
                  style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    borderRadius: 4,
                    opacity: 0.7,
                    backgroundColor: '#ff69b4',
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`,
                  }}
                />
              </div>
            )
          }}
        </Animate>
      </div>
    )
  }
}