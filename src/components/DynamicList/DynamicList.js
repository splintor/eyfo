import React from 'react';
import { func, arrayOf, string } from 'prop-types';

import AddOrgForm from './AddOrgForm/AddOrgForm';
import OrganizationList from './OrganizationList/OrganizationList';
import styles from './DynamicList.scss';

const DynamicList = ({
  addOrg, organizations, removeOrg, onDragStart, onDragEnd, onDragOver,
}) => (
  <div className={styles.componentWrapper}>
    <OrganizationList
      organizations={organizations}
      removeOrg={removeOrg}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    />
    <AddOrgForm addOrg={addOrg} />
    <small className="form-text text-muted">You can use also csv format i.e. org1, org2...</small>
  </div>
);

DynamicList.propTypes = {
  addOrg: func.isRequired,
  removeOrg: func.isRequired,
  onDragStart: func.isRequired,
  onDragEnd: func.isRequired,
  onDragOver: func.isRequired,
  organizations: arrayOf(string).isRequired,
};

export default DynamicList;
