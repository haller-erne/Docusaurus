---
title: Troubleshooting & FAQ
sidebar_label: Troubleshooting
sidebar_position: 11
---

# Troubleshooting & FAQ

## Connection Issues

### "Connection refused"

**Cause**: Controller is not reachable or wrong port.

**Solutions**:
- Verify the controller's IP address and port
- Check that the controller is powered on and connected to the network
- Verify no firewall is blocking TCP port 4545 (or your configured port)
- Try pinging the controller: `ping <IP address>`

### "Connection timed out"

**Cause**: Network path issue or controller not responding.

**Solutions**:
- Check physical network connectivity (cable, switch, Wi-Fi)
- Verify you're on the same network/VLAN as the controller
- Try a longer timeout in the Keep Alive field

### Connection drops after a few seconds

**Cause**: Keep-alive messages not being sent or controller timeout is shorter than expected.

**Solutions**:
- Ensure Keep Alive Time is set to 10 seconds or less
- Check that the controller's expected keep-alive interval matches your setting
- Look at the log for MID 9999 messages — they should appear at the configured interval

### No response to MID 0001

**Cause**: Wrong protocol variant selected.

**Solutions**:
- Try a different variant (Rexroth, BMW, Ford)
- Check the controller documentation for the correct variant
- Look at the raw bytes in the log — if the header looks scrambled, the variant is likely wrong

## MID Panel Issues

### "DocumentedPossibleErrors" appears in sent messages

**Known issue**: The Open Protocol Interpreter library (v6.1.1) adds error metadata to sent MIDs. This is cosmetic and does not affect the actual message sent to the controller.

### Fields don't match my controller

**Solution**: Try a different **revision** in the MID panel's revision dropdown. Different controller firmware versions support different revisions with different field sets.

## Scripting Issues

### "function main() not found"

**Cause**: Your script doesn't define a `main()` function.

**Solution**: Every script must have:
```lua
function main()
    -- your code here
end
```

### "attempt to call a nil value"

**Cause**: Calling a method that doesn't exist or using wrong syntax.

**Solutions**:
- Use **colon syntax** for method calls: `session:Connect()` not `session.Connect()`
- Check spelling of method names against the [API Reference](06-lua-api-reference.md)
- Ensure `session`, `log`, and `assert` are lowercase

### Script hangs / doesn't complete

**Causes**:
- `WaitForMid()` waiting for a MID that never arrives
- Infinite loop in your script

**Solutions**:
- Click **Stop** to cancel the test
- Use reasonable timeouts (5000–30000ms)
- Use `TryWaitForRawResponse()` instead of `WaitForRawResponse()` if timeout is expected
- Add `log:Info()` calls to track where the script is stuck

### LSP diagnostics not working

**Cause**: lua-language-server binary missing or corrupted.

**Solution**: Reinstall the application — the installer automatically deploys the language server.

Then restart the Test Suites window.

## Log Issues

### Log is too cluttered

**Solutions**:
- Enable **Hide Alive** to filter out MID 9998/9999 keep-alive messages
- Use **Wireshark mode** to focus on individual message details
- Clear the log periodically

### Log entries disappear

**Expected behavior**: The log auto-trims at 11,000 entries, keeping the most recent 10,000.

## General Issues

### Application won't start

**Solutions**:
- Verify .NET 8 Desktop Runtime is installed: `dotnet --list-runtimes`
- Reinstall from the installer (it will download the runtime if missing)

### "Demo features disabled" message

**Solution**: Load a license file. See [Licensing](10-licensing.md).

### High DPI display issues

The application supports DPI-aware scaling. If panels appear too small or too large:
- Check Windows display scaling settings (Settings → Display → Scale)
- The application respects the system DPI setting

## FAQ

**Q: Can I connect to multiple controllers simultaneously?**
A: The main application connects to one controller at a time. However, Lua scripts can create multiple independent sessions using `createSession()`.

**Q: Which Open Protocol versions are supported?**
A: The application supports Open Protocol with Rexroth, BMW, and Ford header variants. 78 MIDs are implemented across 23 groups.

**Q: Can I save my panel layout?**
A: Panel positions are saved automatically when you close the application.

**Q: Where are my test scripts stored?**
A: `%APPDATA%\Haller + Erne GmbH\heOPTester\Tests\`

**Q: Can I use external Lua libraries?**
A: Only in **Unrestricted Mode** (per workspace). Enable it in the Test Suites toolbar. Standard mode blocks `require`, `io`, and `os` for security.

**Q: What's the maximum number of concurrent tests?**
A: 5 concurrent test runs, each with its own TCP connection.

**Q: How do I export test results for CI/CD?**
A: Use **Generate Report → JUnit XML**. This format is compatible with Jenkins, GitHub Actions, and most CI systems.
