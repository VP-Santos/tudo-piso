import { Theme } from "../Theme";

const basePaper = {
  backgroundColor: Theme.colors.background.paper,
  color: Theme.colors.text.primary,
  borderRadius: Theme.radius.lg,
  boxShadow: Theme.shadow.lg,
  p: { xs: 2, md: 4 },
};

const flexCenter = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center' as const,
};

export const paperDescription = { ...basePaper };
export const paperInformation = { ...basePaper, ...flexCenter };
export const infoPagePaper = { ...basePaper, mt: 2, mb: 4, boxShadow: Theme.shadow.md };

export const categoryMainPaper = { 
  ...basePaper, 
  bgcolor: Theme.colors.secondaryLight, 
  my: 6, 
  borderRadius: Theme.radius.md 
};

export const lineProductPaper = { ...basePaper, elevation: 8 };
export const productMainPaper = { ...basePaper, mt: 4, mb: 5, borderRadius: Theme.radius.lg };

export const manufacturerHeader = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  p: 2,
  borderRadius: Theme.radius.sm,
  bgcolor: Theme.colors.secondary,
  boxShadow: Theme.shadow.sm,
};

export const sectionHighlightHeader = {
  bgcolor: Theme.colors.secondaryLight,
  textAlign: 'center' as const,
  p: 3,
  m: { xs: 1, md: 3 },
  borderRadius: Theme.radius.sm,
  boxShadow: Theme.shadow.sm,
};

export const technicalSpecsBox = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 0.5,
  p: 2,
  bgcolor: 'rgba(0, 0, 0, 0.03)',
  borderRadius: Theme.radius.sm,
  mb: 3,
};

export const typoTitle = {
  fontWeight: 700,
  textAlign: 'center' as const,
  letterSpacing: '0.5px',
  textTransform: 'uppercase' as const,
};

export const typoDescription = {
  color: Theme.colors.text.secondary,
  lineHeight: Theme.typography.body.lineHeight,
  fontSize: Theme.typography.body.fontSize,
};