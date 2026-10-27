"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      isSelected={isDark}
      onChange={(checked) => setTheme(checked ? "dark" : "light")}
    >
      {({ isSelected }) => (
        <Switch.Control>
          <Switch.Thumb>
            <Switch.Icon>
              {isSelected ? (
                <Moon className="size-3" />
              ) : (
                <Sun className="size-3" />
              )}
            </Switch.Icon>
          </Switch.Thumb>
        </Switch.Control>
      )}
    </Switch>
  );
};

export default ThemeToggle;
