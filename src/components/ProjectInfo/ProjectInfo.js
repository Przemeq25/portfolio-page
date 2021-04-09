import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ProjectContainer } from '../ProjectContainer/ProjectContainer.styles';
import {
  ProjectInfoList,
  ProjectInfoListItem,
  ProjectInfoWrapper,
  ProjectInfoListItemText,
} from './ProjectInfo.styles';

const ProjectInfo = ({ projectInfo }) => {
  const infoRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.set(infoRef.current.children, {
      autoAlpha: 0,
      x: '-=10',
    });

    gsap.to(infoRef.current.children, {
      autoAlpha: 1,
      x: 0,
      ease: 'power2.inOut',
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: '50 90%',
      },
    });
  }, []);

  const renderList = (key = '') =>
    key.split(', ').map((item) => (
      <ProjectInfoListItemText
        key={item}
        size="xs"
        weight="light"
        color="tertiary"
      >
        {item}
      </ProjectInfoListItemText>
    ));

  return (
    <ProjectInfoWrapper ref={wrapperRef}>
      <ProjectContainer>
        <ProjectInfoList ref={infoRef}>
          <ProjectInfoListItem>
            <ProjectInfoListItemText size="md" weight="medium" margin={10}>
              Role
            </ProjectInfoListItemText>
            {renderList(projectInfo?.role)}
          </ProjectInfoListItem>

          <ProjectInfoListItem>
            <ProjectInfoListItemText size="md" weight="medium" margin={10}>
              Tech Stack
            </ProjectInfoListItemText>
            {renderList(projectInfo?.techStack)}
          </ProjectInfoListItem>
          <ProjectInfoListItem>
            <ProjectInfoListItemText size="md" weight="medium" margin={10}>
              Date
            </ProjectInfoListItemText>
            {renderList(projectInfo?.date)}
          </ProjectInfoListItem>
        </ProjectInfoList>
      </ProjectContainer>
    </ProjectInfoWrapper>
  );
};
export default ProjectInfo;

ProjectInfo.propTypes = {
  projectInfo: PropTypes.shape({
    date: PropTypes.string,
    role: PropTypes.string,
    techStack: PropTypes.string,
  }),
};
ProjectInfo.defaultProps = {
  projectInfo: { role: '', techStack: '', date: '' },
};
