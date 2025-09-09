# Haller + Erne ctrlX Solutions Documentation

This repository hosts the public documentation portal for **Haller + Erne's ctrlX CORE ecosystem solutions**. Our documentation provides comprehensive user guides and technical resources for industrial automation professionals working with ctrlX-integrated products.

🌐 **Live Site:** [https://haller-erne.github.io/Docusaurus/](https://haller-erne.github.io/Docusaurus/)

## 🏭 Available Products

### Stahlwille 766 Integration App
Complete solution for integrating Stahlwille 766 WiFi torque wrenches with ctrlX CORE.

**Features:**
- Real-time tool state monitoring and control
- Configurable parameter sets (PSets) for different operations
- Live torque and angle data visualization
- ctrlX DataLayer integration for PLC connectivity
- Secure snap package deployment

**Documentation:** [View User Guide →](docs/stahlwille-766/user-guide.md)

### Opex Solution *(Coming Soon)*
Industrial optimization and efficiency monitoring solution for ctrlX CORE.

**Planned Features:**
- Performance optimization monitoring
- Efficiency analytics and reporting
- Advanced reporting and insights

**Documentation:** [Learn More →](docs/opex/overview.md)

## 📚 What's Included

Each product includes comprehensive documentation covering:
- **Installation & Setup** - Step-by-step installation guides
- **Configuration** - Detailed configuration tutorials and best practices
- **User Interface** - Complete UI documentation and widget usage
- **Data Integration** - ctrlX DataLayer connectivity and PLC integration
- **Licensing** - Activation guides and compliance information
- **Troubleshooting** - Common issues, solutions, and diagnostic procedures
- **Quick Reference** - Essential commands and procedures

## 🚀 Quick Start

### Prerequisites
- **Node.js** 22+ (with npm)
- **Git** for version control

### Local Development

1. **Clone & Install**
   ```bash
   git clone https://github.com/haller-erne/Docusaurus.git
   cd Docusaurus
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   Opens at `http://localhost:3000/Docusaurus/` with hot reload enabled.

3. **Build for Production**
   ```bash
   npm run build
   ```
   Static files generated in `build/` directory.

4. **Preview Production Build**
   ```bash
   npm run serve
   ```

### Deployment

The site automatically deploys when changes are pushed to the `main` branch via GitHub Actions workflow.

## 📖 Contributing Documentation

### Adding New Products

To add documentation for a new Haller + Erne ctrlX product:

1. **Create Product Directory**
   ```bash
   mkdir docs/your-product-name
   ```

2. **Add Documentation Files**
   - Create markdown files following the established pattern
   - Include: user guide, installation, configuration, troubleshooting, etc.

3. **Update Navigation**
   - Add product section to `sidebars.ts`
   - Update homepage cards in `src/pages/index.tsx`
   - Add footer links in `docusaurus.config.ts`

4. **Test & Deploy**
   ```bash
   npm start  # Test locally
   git add .
   git commit -m "Add [product-name] documentation"
   git push origin main
   ```

### Content Guidelines

- Use clear, action-oriented headings
- Include code examples and screenshots where helpful
- Follow the established file naming conventions
- Test all links and ensure they work properly

## 🔒 Developer Documentation

**Advanced technical documentation** including API references, architecture details, backend/frontend development guides, and system internals are maintained in a **separate private repository** for security purposes.

**Access:** Contact your system administrator or project lead for developer documentation credentials.

## 📄 License & Support

**License:** Documentation © 2025 Haller + Erne GmbH. All rights reserved.

**Support:**
- 📧 **Email:** registration@haller-erne.com  
- 🏢 **Company:** Haller + Erne GmbH
- 📍 **Address:** Im Schelmental 4, D-74226 Nordheim, Germany
- 📞 **Phone:** +49 7133 96 12-30

---

*This documentation portal is built with [Docusaurus](https://docusaurus.io/) and optimized for public consumption of Haller + Erne ctrlX solutions.*
