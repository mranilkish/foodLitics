import {Platform} from 'react-native';
import theme from '../../styles/theme';

const styles = {
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.WHITE_COLOR,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTextWrapper: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText1: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE + 8,
  },
  headerText2: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE + 8,
    color: theme.PRIMARY_COLOR,
  },
  bodyWrapper: {
    flex: 2.2,
    marginHorizontal: 45,
    marginTop: 50,
  },
  loginCard: {
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 40,
    borderWidth: 1,
    borderColor: '#e9e9e990',
    borderRadius: 8,
    backgroundColor: theme.WHITE_COLOR,
    shadowColor: '#b9b9b9',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.5,
    elevation: 3,
    position: 'relative',
  },
  loginGreetingsText: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE,
    color: theme.PRIMARY_COLOR,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_NORMAL,
  },
  buttonWrapper: {
    marginTop: 20,
    backgroundColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 99,
    alignSelf: 'center',
  },
  buttonWrapperText: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
  footerText1: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_SMALL - 2,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
  footerText2: {
    color: theme.PRIMARY_COLOR,
  },
  forgotPasswordText: {
    color: '#cccccc',
    marginTop: 10,
    textAlign: 'right',
    marginHorizontal: 30,
  },
};

export default styles;
