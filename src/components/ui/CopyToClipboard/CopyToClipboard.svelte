<script lang="ts">
  import IconButton from "../IconButton";
  import Clipboard from "/assets/iconography/copy.svg";

  export let text: string;

  let copied = false;

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(text);
    copied = true;
  };
</script>

<div>
  <div class="input-wrapper">
    <input readonly value={text} />
    <IconButton ariaLabel="Copy to clipboard" on:click={copyToClipboard}>
      <img src={Clipboard} alt="clipboard icon" />
    </IconButton>
  </div>
  {#if copied}
    <p>Copied to clipboard!</p>
  {/if}
</div>

<style>
  .input-wrapper {
    position: relative;
    margin-bottom: 0.5rem;
  }

  .input-wrapper > input {
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--border-color);
    width: 100%;
    box-sizing: border-box;
    color: var(--text-body);
  }

  .input-wrapper > input:focus {
    outline: none;
  }

  .input-wrapper > :global(button) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
</style>
