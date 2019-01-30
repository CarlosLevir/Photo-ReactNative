const colors = {
  primary: {
    light: '#2a5298',
    dark: '#10336B'
  },
  blue: {
    light: '#5CA1F1',
    dark: '#1565C0'
  },
  purple: {
    light: '#666AD1',
    dark: '#303F9F'
  },
  green: {
    light: '#629749',
    dark: '#33691E'
  },
  shadow: {
    light: '#E8E8E8',
    dark: '#9E9EA1'
  },
  background: '#f5f5f5',
  white: '#FFFFFF',
  black: '#333333',
  danger: '#CB3737',
  opacities: {
    grey: 'rgba(51,51,51,0.72)',
    blue: 'rgba(16,51,107,0.37)'
  }
};

const commonStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  inputs: {
    height: 37,
    backgroundColor: colors.shadow.light,
    padding: 10,
    borderRadius: 10
  },
  elevation: {
    elevation: 2,
    shadowColor: colors.shadow.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3
  }
};

const fonts = {
  xsm: 10,
  sm: 14,
  md: 16,
  subtitle: 18,
  title: 22,
  icon: 20,
  lg: 30
};

export {
  colors, commonStyles, fonts
};
