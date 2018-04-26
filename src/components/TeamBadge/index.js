/**
*
* TeamBadge
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssSet from 'classnames'
import Flex from '../Flex'

const TeamBadgeWrapper = Flex.extend`
  font-size: small;
  font-weight: 300;

  small {
    color: white;
    text-transform: uppercase;
  }
  span {
    color: ${props => props.theme.colors.white};
    opacity: 0.7;
  }

  .team-logo {

  }
`

const TeamBadge = ({
  className,
  logo,
  title,
  subtitle,
}) => {
  return (
    <TeamBadgeWrapper alignItems="center" className={className}>
      <Flex mr="1rem">
        <img src={logo} className="rounded" height="40" />
      </Flex>
      <Flex flexDirection="column">
        <Flex>
          <small>{title}</small>
        </Flex>
        <Flex>
          <span>{subtitle}</span>
        </Flex>
      </Flex>
    </TeamBadgeWrapper>
  )
}

TeamBadge.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

TeamBadge.defaultProps = {
  className: '',
  logo: null,
  title: null,
  subtitle: null,
};

export default TeamBadge
