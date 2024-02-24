import Navbar from '../../components/elements/Navbar'
import Footer from '../../components/elements/Footer'
import Type from './type'
import styles from './style.module.css';

export default function Layout(props: Type.Layout) { 
  return (
    <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" className={styles.root}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}
