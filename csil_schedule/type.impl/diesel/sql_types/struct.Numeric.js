(function() {var type_impls = {
"diesel":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QueryId-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#impl-QueryId-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"diesel/query_builder/trait.QueryId.html\" title=\"trait diesel::query_builder::QueryId\">QueryId</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.QueryId\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.QueryId\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/query_builder/trait.QueryId.html#associatedtype.QueryId\" class=\"associatedtype\">QueryId</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>A type which uniquely represents <code>Self</code> in a SQL query. <a href=\"diesel/query_builder/trait.QueryId.html#associatedtype.QueryId\">Read more</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.HAS_STATIC_QUERY_ID\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#associatedconstant.HAS_STATIC_QUERY_ID\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"diesel/query_builder/trait.QueryId.html#associatedconstant.HAS_STATIC_QUERY_ID\" class=\"constant\">HAS_STATIC_QUERY_ID</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a> = true</h4></section></summary><div class='docblock'>Can the SQL generated by <code>Self</code> be uniquely identified by its type? <a href=\"diesel/query_builder/trait.QueryId.html#associatedconstant.HAS_STATIC_QUERY_ID\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.query_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/query_builder/query_id.rs.html#59-65\">source</a><a href=\"#method.query_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"diesel/query_builder/trait.QueryId.html#method.query_id\" class=\"fn\">query_id</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\">TypeId</a>&gt;</h4></section></summary><div class='docblock'>Returns the type id of <code>Self::QueryId</code> if <code>Self::HAS_STATIC_QUERY_ID</code>.\nReturns <code>None</code> otherwise. <a href=\"diesel/query_builder/trait.QueryId.html#method.query_id\">Read more</a></div></details></div></details>","QueryId","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sub-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/ops.rs.html#94\">source</a><a href=\"#impl-Sub-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"diesel/sql_types/ops/trait.Sub.html\" title=\"trait diesel::sql_types::ops::Sub\">Sub</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Rhs\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Rhs\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/ops/trait.Sub.html#associatedtype.Rhs\" class=\"associatedtype\">Rhs</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>The SQL type which can be subtracted from this one</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/ops/trait.Sub.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>The SQL type of the result of subtracting <code>Rhs</code> from <code>Self</code></div></details></div></details>","Sub","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mul-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/ops.rs.html#94\">source</a><a href=\"#impl-Mul-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"diesel/sql_types/ops/trait.Mul.html\" title=\"trait diesel::sql_types::ops::Mul\">Mul</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Rhs\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Rhs\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/ops/trait.Mul.html#associatedtype.Rhs\" class=\"associatedtype\">Rhs</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>The SQL type which this can be multiplied by</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/ops/trait.Mul.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>The SQL type of the result of multiplying <code>Self</code> by <code>Rhs</code></div></details></div></details>","Mul","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#impl-Debug-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#impl-Clone-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Add-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/ops.rs.html#94\">source</a><a href=\"#impl-Add-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"diesel/sql_types/ops/trait.Add.html\" title=\"trait diesel::sql_types::ops::Add\">Add</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Rhs\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Rhs\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/ops/trait.Add.html#associatedtype.Rhs\" class=\"associatedtype\">Rhs</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>The SQL type which can be added to this one</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/ops/trait.Add.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>The SQL type of the result of adding <code>Rhs</code> to <code>Self</code></div></details></div></details>","Add","diesel::sql_types::Decimal"],["<section id=\"impl-SingleValue-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#impl-SingleValue-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"diesel/sql_types/trait.SingleValue.html\" title=\"trait diesel::sql_types::SingleValue\">SingleValue</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section>","SingleValue","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Foldable-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/fold.rs.html#30-40\">source</a><a href=\"#impl-Foldable-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"diesel/sql_types/trait.Foldable.html\" title=\"trait diesel::sql_types::Foldable\">Foldable</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Sum\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Sum\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/trait.Foldable.html#associatedtype.Sum\" class=\"associatedtype\">Sum</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Nullable.html\" title=\"struct diesel::sql_types::Nullable\">Nullable</a>&lt;<a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a>&gt;</h4></section></summary><div class='docblock'>The SQL type of <code>sum(this_type)</code></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Avg\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Avg\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/trait.Foldable.html#associatedtype.Avg\" class=\"associatedtype\">Avg</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Nullable.html\" title=\"struct diesel::sql_types::Nullable\">Nullable</a>&lt;<a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a>&gt;</h4></section></summary><div class='docblock'>The SQL type of <code>avg(this_type)</code></div></details></div></details>","Foldable","diesel::sql_types::Decimal"],["<section id=\"impl-Copy-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#impl-Copy-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section>","Copy","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Div-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/ops.rs.html#94\">source</a><a href=\"#impl-Div-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"diesel/sql_types/ops/trait.Div.html\" title=\"trait diesel::sql_types::ops::Div\">Div</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Rhs\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Rhs\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/ops/trait.Div.html#associatedtype.Rhs\" class=\"associatedtype\">Rhs</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>The SQL type which this one can be divided by</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/ops/trait.Div.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>The SQL type of the result of dividing <code>Self</code> by <code>Rhs</code></div></details></div></details>","Div","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SqlType-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#impl-SqlType-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"diesel/sql_types/trait.SqlType.html\" title=\"trait diesel::sql_types::SqlType\">SqlType</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.IsNull\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IsNull\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"diesel/sql_types/trait.SqlType.html#associatedtype.IsNull\" class=\"associatedtype\">IsNull</a> = <a class=\"struct\" href=\"diesel/sql_types/is_nullable/struct.NotNull.html\" title=\"struct diesel::sql_types::is_nullable::NotNull\">NotNull</a></h4></section></summary><div class='docblock'>Is this type nullable? <a href=\"diesel/sql_types/trait.SqlType.html#associatedtype.IsNull\">Read more</a></div></details></div></details>","SqlType","diesel::sql_types::Decimal"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Numeric\" class=\"impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#impl-Default-for-Numeric\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/diesel/sql_types/mod.rs.html#180\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"diesel/sql_types/struct.Numeric.html\" title=\"struct diesel::sql_types::Numeric\">Numeric</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","diesel::sql_types::Decimal"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()