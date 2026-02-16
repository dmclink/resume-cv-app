import FormField from './FormField';
function PreviewControls({ handleChange }) {
	return (
		<form id="preview-controls-form">
			<label>
				Font Size:
				<select defaultValue="12px" name="fontSize" onChange={handleChange}>
					<option value="10px">10px</option>
					<option value="11px">11px</option>
					<option value="12px">12px</option>
					<option value="13px">13px</option>
					<option value="14px">14px</option>
				</select>
			</label>
			<label>
				Font Family:
				<select
					defaultValue="Arial, Helvetica, Arimo, DejaVu Sans, sans-serif"
					name="fontFamily"
					onChange={handleChange}
				>
					<option value="Arial, Helvetica, Arimo, DejaVu Sans, sans-serif">Arial</option>
					<option value="Calibri, Carlito, Noto Sans, Candara, Segoe, Segoe UI, Optima, sans-serif">
						Calibri
					</option>
					<option value="Times New Roman, Times, Georgia, serif">Times New Roman</option>
				</select>
			</label>
			<label>
				Heading Font Size:
				<select defaultValue="12px" name="headingFontSize" onChange={handleChange}>
					<option value="10px">10px</option>
					<option value="11px">11px</option>
					<option value="12px">12px</option>
					<option value="13px">13px</option>
					<option value="14px">14px</option>
				</select>
			</label>
			<label>
				Heading Font Family:
				<select
					name="headingFontFamily"
					defaultValue="Arial, Helvetica, Arimo, DejaVu Sans, sans-serif"
					onChange={handleChange}
				>
					<option value="Arial, Helvetica, Arimo, DejaVu Sans, sans-serif">Arial</option>
					<option value="Calibri, Carlito, Noto Sans, Candara, Segoe, Segoe UI, Optima, sans-serif">
						Calibri
					</option>
					<option value="Times New Roman, Times, Georgia, serif">Times New Roman</option>
				</select>
			</label>
			<FormField
				name="lineHeight"
				label="Line Height:"
				type="number"
				step="0.1"
				defaultValue="1.1"
				onChange={handleChange}
			/>
		</form>
	);
}

export default PreviewControls;
