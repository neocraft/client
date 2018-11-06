// @flow
import * as React from 'react'
import * as Kb from '../../../common-adapters'
import * as Styles from '../../../styles'

type EnterNameProps = {|
  error?: string,
  name: string,
  onEnterKeyDown?: () => void,
  onNameChange: string => void,
|}

const EnterName = (props: EnterNameProps) => {
  // TODO use wallet staticConfig to keep in sync with the service
  const accountNameMaxLength = 24

  return (
    <Kb.Box2 direction="vertical" fullWidth={true} gap={Styles.isMobile ? 'small' : 'medium'} gapStart={true}>
      {!Styles.isMobile && (
        <Kb.Box2 direction="vertical" centerChildren={true}>
          <Kb.Icon type="icon-wallet-add-48" />
          <Kb.Text type="Header">Name your account</Kb.Text>
        </Kb.Box2>
      )}
      <Kb.Box2 direction="vertical" gap="xtiny" fullWidth={true} style={styles.inputContainer}>
        <Kb.Text type="BodySmallSemibold" style={{color: Styles.globalColors.blue}}>
          Account name
        </Kb.Text>
        <Kb.NewInput
          style={styles.input}
          value={props.name}
          onEnterKeyDown={props.onEnterKeyDown}
          onChangeText={props.onNameChange}
          autoFocus={true}
          maxLength={accountNameMaxLength}
        />
        {!!props.error && (
          <Kb.Text type="BodySmall" style={styles.error}>
            {props.error}
          </Kb.Text>
        )}
      </Kb.Box2>
      <Kb.InfoNote>
        <Kb.Box2 direction="vertical" fullWidth={true}>
          <Kb.Text type="BodySmall" style={styles.textCenter}>
            Your account name is encrypted and only visible to you.
          </Kb.Text>
        </Kb.Box2>
      </Kb.InfoNote>
    </Kb.Box2>
  )
}

const styles = Styles.styleSheetCreate({
  icon: {
    width: 48,
    height: 48,
  },
  error: Styles.platformStyles({
    common: {
      color: Styles.globalColors.red,
      width: '100%',
      textAlign: 'left',
    },
    isElectron: {
      wordWrap: 'break-word',
    },
  }),
  input: Styles.platformStyles({common: {margin: 0}, isElectron: {width: '100%'}}),
  inputContainer: Styles.platformStyles({
    common: {
      alignItems: 'flex-start',
    },
    isElectron: {width: '100%'},
    isMobile: {
      justifyContent: 'flex-start',
    },
  }),
  textCenter: {textAlign: 'center'},
})

export default EnterName
