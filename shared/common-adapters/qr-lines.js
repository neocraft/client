// @flow
import * as React from 'react'
import {Box} from './box'
import * as Styles from '../styles'

const long = 22
const small = 4
const padding = 5

const BadLines = () => null

// Note: duplicating the lines here vs a series of maps / permutations so its more readable
const GoodLines = ({color}) => (
  <React.Fragment>
    <Box
      style={Styles.collapseStyles([
        styles.common,
        {backgroundColor: color},
        {height: long, left: padding, top: padding, width: small},
      ])}
    />
    <Box
      style={Styles.collapseStyles([
        styles.common,
        {backgroundColor: color},
        {height: small, left: padding, top: padding, width: long},
      ])}
    />
    <Box
      style={Styles.collapseStyles([
        styles.common,
        {backgroundColor: color},
        {height: long, right: padding, top: padding, width: small},
      ])}
    />
    <Box
      style={Styles.collapseStyles([
        styles.common,
        {backgroundColor: color},
        {height: small, right: padding, top: padding, width: long},
      ])}
    />
    <Box
      style={Styles.collapseStyles([
        styles.common,
        {backgroundColor: color},
        {bottom: padding, height: long, left: padding, width: small},
      ])}
    />
    <Box
      style={Styles.collapseStyles([
        styles.common,
        {backgroundColor: color},
        {bottom: padding, height: small, left: padding, width: long},
      ])}
    />
    <Box
      style={Styles.collapseStyles([
        styles.common,
        {backgroundColor: color},
        {bottom: padding, height: long, right: padding, width: small},
      ])}
    />
    <Box
      style={Styles.collapseStyles([
        styles.common,
        {backgroundColor: color},
        {bottom: padding, height: small, right: padding, width: long},
      ])}
    />
  </React.Fragment>
)

const QRScanLines = ({canScan, color}: {canScan: boolean, color: Styles.Color}) =>
  canScan ? <GoodLines color={color || Styles.globalColors.blue} /> : <BadLines />

const styles = Styles.styleSheetCreate({
  common: {position: 'absolute'},
})

export default QRScanLines
