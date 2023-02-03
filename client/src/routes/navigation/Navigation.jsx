import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import humanizeDuration from 'humanize-duration'

import config from '../../../config'
import { useDefaultNetwork, useIsHarmonyNetwork } from '../../hooks/network'
import { useClient } from '../../hooks/useClient'
import { useDomainName } from '../../hooks/useDomainName'
import { useStores } from '../../stores'
import PageNotClaimed from '../home/PageNotClaimed'
import { Container } from '../home/Home.styles'
import { FlexColumn } from '../../components/Layout'

const Navigation = () => {
  const [record, setRecord] = useState(null)
  const [lastRentedRecord, setLastRentedRecord] = useState(null)
  const [price, setPrice] = useState(null)
  const [parameters, setParameters] = useState({
    rentalPeriod: 0,
    priceMultiplier: 0,
  })
  const [name] = useDomainName()
  const { client, walletAddress, isClientConnected } = useClient()
  const isOwner =
    !!(walletAddress &&
    record?.renter &&
    record.renter.toLowerCase() === walletAddress.toLowerCase())

  const humanD = humanizeDuration.humanizer({ round: true, largest: 1 })

  // start: sync mobx store start
  const { rootStore, domainRecordStore, walletStore } = useStores()
  useEffect(() => {
    domainRecordStore.isOwner = isOwner
  }, [isOwner])

  useEffect(() => {
    rootStore.updateClient(client)
  }, [client])

  useEffect(() => {
    walletStore.isConnected = isClientConnected
    walletStore.walletAddress = walletAddress
    console.log('### isClientConnected', isClientConnected)
  }, [walletAddress, isClientConnected])
  // end: sync mobx store start

  useDefaultNetwork()

  useEffect(() => {
    if (client) {
      client.getPrice({ name }).then((p) => {
        setPrice(p)
      })
    }
  }, [client, name])

  const pollParams = () => {
    if (!client) {
      return
    }
    client.getParameters().then((p) => setParameters(p))
    client.getRecord({ name }).then((r) => {
      setRecord(r)
      domainRecordStore.domainRecord = r
    })
    client.getPrice({ name }).then((p) => setPrice(p))
  }

  useEffect(() => {
    if (!client) {
      return
    }
    pollParams()
  }, [client])

  useEffect(() => {
    if (!parameters?.lastRented) {
      setTimeout(() => {
        console.log('Poll params')
        pollParams()
      }, 12000)
      return
    }
    client
      .getRecord({ name: parameters.lastRented })
      .then((r) => setLastRentedRecord(r))
  }, [parameters?.lastRented])

  const isHarmonyNetwork = useIsHarmonyNetwork()

  return (
    <div>
      {!record && (
        <Container>
          <FlexColumn style={{ height: '90vh', justifyContent: 'center', alignContent: 'center' }}>
            Uploading...
          </FlexColumn>
        </Container>)}
      {(record && !record?.renter)
        ? (
          <Container>
            <PageNotClaimed
              record={record}
              name={name}
              subdomain={config.tld}
              humanD={humanD}
              parameters={parameters}
              price={price}
              isClientConnected={isClientConnected}
              walletAddress={walletAddress}
              isHarmonyNetwork={isHarmonyNetwork}
              client={client}
            />
          </Container>)
        : (
          <Outlet context={{
            record,
            lastRentedRecord,
            price,
            parameters,
            name,
            client,
            walletAddress,
            isClientConnected,
            isOwner,
            isHarmonyNetwork,
            humanD
          }}
          />)}
    </div>
  )
}

export default Navigation
