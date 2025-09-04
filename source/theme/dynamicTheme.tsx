import { Metrics } from './metrics';

export const typoGraphy = {
  badgeText: Metrics.rfv(10), // Badge Text
  caption: Metrics.rfv(11), // Informative Text
  errorText: Metrics.rfv(12), // Error
  logoText: Metrics.rfv(28), // Logo
  header: Metrics.rfv(17), // Header Other Then Status Bar
  subHeader: Metrics.rfv(18), // Tab Text ,
  appHeader: Metrics.rfv(14), // Status Bar Below
  title: Metrics.rfv(15), // Contain Text
  subTitle: Metrics.rfv(14), // Category Name
  body: Metrics.rfv(14), // Normal Text
  subBody: Metrics.rfv(13), // Medium Text
  percentageText: Metrics.rfv(7), // Percentage Text
};

export const shape = {
  surfaceRadius: Metrics.rfv(8), // Cards Surface
  widgetRadius: Metrics.rfv(4), // Item on Card
  avatarRadius: Metrics.rfv(30), // Avatar
  buttonRadius: Metrics.rfv(4), // Buttons
  inputRadius: Metrics.rfv(4), // Inputs
  iconBgRadius: Metrics.rfv(4), // Icon Background
};

export const iconSize = {
  smallTiny: Metrics.rfv(6),
  tiny: Metrics.rfv(8),
  small: Metrics.rfv(12),
  medium: Metrics.rfv(16),
  extraMedium: Metrics.rfv(18),
  large: Metrics.rfv(20),
  extraLarge: Metrics.rfv(24),
  giant: Metrics.rfv(28),
  extraGiant: Metrics.rfv(40),
  huge: Metrics.rfv(70),
  extraHuge: Metrics.rfv(170),
  superGiant: Metrics.rfv(55),
  ultraHuge: Metrics.rfv(185),
  superHuge: Metrics.rfv(150),
  mega: Metrics.rfv(80),
  extraMega: Metrics.rfv(100),
};

export const spacing = {
  tiny: Metrics.rfv(2),
  small: Metrics.rfv(4),
  medium: Metrics.rfv(8),
  large: Metrics.rfv(16),
  extraLarge: Metrics.rfv(24),
  huge: Metrics.rfv(32),
};
