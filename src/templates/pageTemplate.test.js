import React from "react";
import { create } from "react-test-renderer";
import Page from "./pageTemplate";
import { Button } from "@mui/material";

describe("Markdown Page", () => {
  describe("without data", () => {
    const root = create(<Page />).root;
    it("renders", () => {
      expect(root).toBeDefined();
    });
  });

  describe("with data", () => {
    const root = create(
      <Page
        data={{
          markdownRemark: {
            frontmatter: {
              title: "Page title",
              sections: [
                {
                  title: "Basic section with valid structure",
                  body: {
                    childMarkdownRemark: {
                      html: "<p>Html paragraph</p>",
                    },
                  },
                  cta: {
                    path: "/path",
                    label: "Label",
                  },
                },
                {
                  title: "Basic section missing body and cta",
                },
                {
                  title: "Basic section missing body and cta path",
                  cta: {
                    label: "Label",
                  },
                },
                {
                  title: "Basic section missing body and cta label",
                  cta: {
                    path: "/path",
                  },
                },
                {
                  body: {
                    childMarkdownRemark: {
                      html: "<p>Missing title</p>",
                    },
                  },
                },
              ],
            },
          },
        }}
      />
    ).root;

    const sections = root.findAllByType("section");

    describe("semantic html", () => {
      it("renders all sections", () => {
        expect(sections.length).toBe(5);
      });

      it("uses h2 for section title", () => {
        const section0h2 = sections[0].findByType("h2");

        expect(section0h2).toBeDefined();
        expect(section0h2.props.children).toContain("Basic section");
      });

      it("adds link for section cta", () => {
        const section0cta = sections[0].findByType(Button);

        console.log(section0cta.props);

        expect(section0cta).toBeDefined();
        expect(section0cta.props.children).toBe("Label");
        expect(section0cta.props.to).toBe("/path");
      });

      it("has no empty link for missing section cta", () => {
        const checkForCtaInSection1 = () => {
          sections[1].findByType("a");
        };

        expect(checkForCtaInSection1).toThrow();
      });

      it("has no empty link for malformed cta", () => {
        const checkForCtaInSection2 = () => {
          sections[2].findByType("a");
        };

        expect(checkForCtaInSection2).toThrow();

        const checkForCtaInSection3 = () => {
          sections[3].findByType("a");
        };

        expect(checkForCtaInSection3).toThrow();
      });
    });
  });
});
