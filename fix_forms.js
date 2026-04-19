const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

function traverseDist(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(traverseDist(file));
        } else if (file.endsWith('.astro')) {
            results.push(file);
        }
    });
    return results;
}

const astroFiles = traverseDist(srcDir);
let changedCount = 0;

astroFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Fix name inputs
    content = content.replace(/<(input[^>]+placeholder="Ej:\s*Diana\s*Martinez"[^>]*)>/g, (match, p1) => {
        if (!p1.includes('name=')) {
            return `<${p1} name="nombre">`;
        }
        return match;
    });

    // Fix phone inputs
    content = content.replace(/<(input[^>]+placeholder="313\s*000\s*0000"[^>]*)>/g, (match, p1) => {
        if (!p1.includes('name=')) {
            return `<${p1} name="telefono">`;
        }
        return match;
    });

    // Fix select without names
    content = content.replace(/<(select[^>]*class="[^"]*w-full\s+bg-\[#f8f9fa\][^"]*"[^>]*)>/g, (match, p1) => {
        if (!p1.includes('name=')) {
            return `<${p1} name="estado">`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
        console.log(`Updated: ${file}`);
    }
});

console.log(`Finished processing. Updated ${changedCount} files.`);
