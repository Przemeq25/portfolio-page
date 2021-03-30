import React from 'react';
import PropTypes from 'prop-types';
import { ProjectContainer } from '../ProjectContainer/ProjectContainer.styles';
import {
  ProjectInfoList,
  ProjectInfoListItem,
  ProjectInfoWrapper,
  ProjectInfoListItemText,
} from './ProjectInfo.styles';

const ProjectInfo = ({ projectInfo }) => (
  <ProjectInfoWrapper>
    <ProjectContainer>
      <ProjectInfoList>
        {projectInfo.map(({ title, items }) => (
          <ProjectInfoListItem key={title}>
            <ProjectInfoListItemText
              size="md"
              weight="medium"
              margin={10}
              color="tertiary"
            >
              {title}
            </ProjectInfoListItemText>

            {items.split(', ').map((item) => (
              <ProjectInfoListItemText
                size="xs"
                weight="light"
                color="tertiary"
              >
                {item}
              </ProjectInfoListItemText>
            ))}
          </ProjectInfoListItem>
        ))}
      </ProjectInfoList>
    </ProjectContainer>
  </ProjectInfoWrapper>
);

export default ProjectInfo;

ProjectInfo.propTypes = {
  projectInfo: PropTypes.arrayOf(PropTypes.object),
};

ProjectInfo.defaultProps = {
  projectInfo: [
    { title: 'Role', items: '-' },
    {
      title: 'Tech stack',
      items: '-',
    },
    { title: 'Date', items: '-' },
  ],
};
