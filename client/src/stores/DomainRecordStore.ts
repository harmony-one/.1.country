import { RootStore } from './RootStore'
import { BaseStore } from './BaseStore'
import { action, makeObservable, observable } from 'mobx'
import { getDomainName } from '../hooks/useDomainName'
import { DomainRecord, OWNER_INFO_FIELDS } from '../api'
import { toast } from 'react-toastify'

export interface ProfileData {
  bio: string
  telegram: string
  bgColor: string
  youtube: string
  twitter: string
  discord: string
  phone: string
  email: string
}

export class DomainRecordStore extends BaseStore {
  public profile: ProfileData = {
    bio: '',
    phone: '',
    email: '',
    telegram: '',
    twitter: '',
    youtube: '',
    discord: '',
    bgColor: '#f8c1b0',
  }
  public domainName: string = getDomainName()
  public isOwner: boolean = false
  public domainRecord: DomainRecord | null = null

  constructor(rootStore: RootStore) {
    super(rootStore)

    makeObservable(
      this,
      {
        profile: observable,
        updateProfile: action,
        loadOwnerInfo: action.bound,
        domainName: observable,
        domainRecord: observable,
        isOwner: observable,
        revealOwnerInfo: action,
      },
      { autoBind: true }
    )
  }

  updateProfile(data: Partial<ProfileData>) {
    this.profile = { ...this.profile, ...data }
  }

  async loadOwnerInfo() {
    if (!this.isOwner) {
      return
    }
    try {
      console.log('### load owner info', this.domainName)
      const info = await this.rootStore.d1dcClient.getAllOwnerInfo({
        name: this.domainName,
      })
      this.updateProfile(info)
    } catch (ex) {
      console.log('### loadOwnerInfo ex', ex)
    }
  }

  async revealOwnerInfo(infoName: OWNER_INFO_FIELDS) {
    if (!this.rootStore.walletStore.isConnected) {
      toast.error('Please connect your wallet')
      return
    }

    const txToast = toast.loading('Processing transaction')

    const info = await this.rootStore.d1dcClient.revealInfo({
      name: this.domainName,
      info: infoName,
    })

    if (info) {
      this.updateProfile({ [infoName]: info })
      toast.update(txToast, {
        render: 'Transaction success!',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      })
      return info
    } else {
      toast.update(txToast, {
        render: 'Error processing the transaction',
        type: 'error',
        isLoading: false,
        autoClose: 2000,
      })
    }
  }
}
