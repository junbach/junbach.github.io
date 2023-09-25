import "@mantine/core/styles.css";

import { AppShell, Burger, Group, Skeleton, ScrollArea, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { theme } from "~/theme.ts";

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <img src={"/react.svg"} className="logo react" alt="React logo" width={30} />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section>Navbar header</AppShell.Section>
          <AppShell.Section grow my="md" component={ScrollArea}>
            60 links in a scrollable section
            {Array(60)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} h={28} mt="sm" animate={false} />
              ))}
          </AppShell.Section>
          <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
