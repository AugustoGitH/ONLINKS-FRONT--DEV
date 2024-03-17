import Icon from '@/components/Icon'
import * as S from '../styles'
import { ReactNode } from 'react'

interface AlertHelperTextProps {
  helperText?: string | ReactNode
}
const AlertHelperText = ({ helperText }: AlertHelperTextProps) => {
  return (
    <S.AlertHelperText>
      <Icon className="icon-error" icon="bx bxs-error" />
      {
        helperText && (
          <div className='helper-text'>
            {helperText}
          </div>
        )
      }

    </S.AlertHelperText>
  )
}

export default AlertHelperText