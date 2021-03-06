import { visit } from "@ember/test-helpers";
import { test } from "qunit";
import { IMAGE_VERSION as v } from "pretty-text/emoji/version";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("Emoji", { loggedIn: true });

test("emoji is cooked properly", async (assert) => {
  await visit("/t/internationalization-localization/280");
  await click("#topic-footer-buttons .btn.create");

  await fillIn(".d-editor-input", "this is an emoji :blonde_woman:");
  assert.equal(
    find(".d-editor-preview:visible").html().trim(),
    `<p>this is an emoji <img src="/images/emoji/emoji_one/blonde_woman.png?v=${v}" title=":blonde_woman:" class="emoji" alt=":blonde_woman:"></p>`
  );
});

test("skin toned emoji is cooked properly", async (assert) => {
  await visit("/t/internationalization-localization/280");
  await click("#topic-footer-buttons .btn.create");

  await fillIn(".d-editor-input", "this is an emoji :blonde_woman:t5:");
  assert.equal(
    find(".d-editor-preview:visible").html().trim(),
    `<p>this is an emoji <img src="/images/emoji/emoji_one/blonde_woman/5.png?v=${v}" title=":blonde_woman:t5:" class="emoji" alt=":blonde_woman:t5:"></p>`
  );
});
