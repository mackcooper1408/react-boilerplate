/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AddStringsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Add a new string!',
  },
});
