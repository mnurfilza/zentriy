// import { useCallback, useState } from 'react'
// import { useRouter } from 'next/router'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

export default function TopBar() {
  // const router = useRouter()
  // const [menuPopOut, setMenuPopOut] = useState<boolean>(false)
  // const pathname = router.pathname.split('/')

  // const handleLogout = async () => {
  //   await logout()
  //   clearStorages()
  //   router.push('/')
  // }

  return (
    <div
      className={styles.root}
      // style={{ gridTemplateColumns: pathname.length > 2 ? '3rem 1fr 3rem' : '1fr 3rem' }}
    >
      dlwadlanwdlknadklaw
      {/* {pathname.length > 2 && (
        <span onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      )}
      <h2>{pathname[1]}</h2>
      <span onClick={() => setMenuPopOut(!menuPopOut)} style={{ fontSize: '2rem' }}>
        <FontAwesomeIcon icon={faCircleUser} />
      </span>
      {menuPopOut && (
        <div>
          <Button color="red" variant="solid" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )} */}
    </div>
  )
}
