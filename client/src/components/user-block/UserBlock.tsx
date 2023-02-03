/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import {Box} from "grommet";
import {observer} from "mobx-react-lite";

import {WalletStatus} from '../wallets/Wallets'
import {ModalRegister} from '../../modules/modals'
import {ModalIds} from "../../modules/modals";
import {ModalProfileEditBio} from "../modals/ModalProfileEditBio";
import {modalStore} from "../../modules/modals/ModalContext";
import {useStores} from "../../stores";
import {SocialMedia} from "./SocialMedia";

import {ButtonSmall} from "../Controls";
import {UserBlockDiv} from './UserBlock.styles'
interface Props {

}

const UserBlock: React.FC<Props> = observer(() => {
  const src = 'https://ipfs.io/ipfs/QmP7ZybNFUgQWKoim9fnFPLBCyoWnZ5GT5acc8MFX9YVuC'
  const alt = 'Image text'


  const handleEditProfile = () => {
    modalStore.showModal(ModalIds.PROFILE_EDIT)
  }

  const {domainRecordStore, walletStore} = useStores()

  return (
    <UserBlockDiv>
      <div className='user-picture'>
        <img
          src={src}
          alt={alt}
        />
      </div>
      <WalletStatus className='status-section' connected={walletStore.isConnected} />
      <div className='name-section'>
        <span>{`${domainRecordStore.domainName}.1`}</span>
        {/*{domainRecordStore.domainRecord?.renter && <span>{`${truncateAddressString(domainRecordStore.domainRecord.renter, 5)}`}</span>}*/}
      </div>
      {(domainRecordStore.isOwner && walletStore.isConnected) && (
        <Box align="center" pad="4px">
          <ButtonSmall onClick={handleEditProfile}>
            Edit Profile
          </ButtonSmall>
        </Box>)
      }
      <div className='user-profile-text'>
        {domainRecordStore.profile.bio || 'Insert your bio here'}
      </div>
      <SocialMedia />

      <ModalRegister layerProps={{position: 'right', full: 'vertical'}} modalId={ModalIds.PROFILE_EDIT}>
        <ModalProfileEditBio />
      </ModalRegister>
    </UserBlockDiv>
  )
})

export default UserBlock
