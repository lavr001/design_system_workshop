import { string } from "prop-types";
import { spacing } from "../../tokens";
import React from "react";
import styled from "styled-components";

/* Avatar
 *
 * Avatar displays user picture
 */
const Avatar = ({ src, ...props }) => <StyledAvatar src={src} {...props} />;

const StyledAvatar = styled.img`
  width: ${spacing.spacemd.top};
  height: ${spacing.spacemd.top};
  border-radius: 16px;
`;

Avatar.propTypes = {
  src: string,
};

export default Avatar;
